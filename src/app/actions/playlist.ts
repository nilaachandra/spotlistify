'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { PlaylistSchema } from '@/schemas'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function fetchMetadata(url: string) {
  const apiKey = process.env.LINKPREVIEW_DOT_NET_API_KEY!
  try {
    const response = await fetch(`https://api.linkpreview.net/?key=${apiKey}&q=${encodeURIComponent(url)}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('Failed to fetch metadata:', error)
    return { success: false, error: 'Failed to fetch metadata.' }
  }
}

export async function addPlaylist(values: z.infer<typeof PlaylistSchema>, userId: string,) {
  try {
    // Fetch metadata
    const metadataResult = await fetchMetadata(values.link)
    if (!metadataResult.success) {
      throw new Error('Failed to fetch metadata')
    }

    const metadata = metadataResult.data

    // Parse metadata
    const title = metadata.title || 'Untitled Playlist'
    const imageUrl = metadata.image || ''
    const metadataDescription = metadata.description || ''

    // Add playlist to database
    const newPlaylist = await prisma.playlist.create({
      data: {
        link: values.link,
        description: values.description,
        userId: userId,
        title: title,
        imageUrl: imageUrl,
        info: metadataDescription,
      },
    })

    console.log('Added playlist:', newPlaylist)

    // Revalidate the profile page to show the new playlist
    revalidatePath('/profile')

    return { success: true, message: 'Playlist added successfully' }
  } catch (error) {
    console.error('Failed to add playlist:', error)
    return { success: false, error: 'Failed to add playlist. Please try again.' }
  }
}

export async function editPlaylist(userId: string, description:string) {
  
}