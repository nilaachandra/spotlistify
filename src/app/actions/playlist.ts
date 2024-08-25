'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { PlaylistSchema } from '@/schemas'

import { db } from '@/lib/db'

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

export async function addPlaylist(values: z.infer<typeof PlaylistSchema>, username: string,) {
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
    const newPlaylist = await db.playlist.create({
      data: {
        link: values.link,
        description: values.description,
        username: username,
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

export async function editPlaylist(description: string, userId: string) {
  try {
    const updatedPlaylist = await db.playlist.update({
      where: {
        id: userId
      },
      data: {
        description: description,
      }
    })
    return { success: true, playlist: updatedPlaylist }

  } catch (error) {
    console.error('Failed to update playlist:', error)
    return { success: false, error: 'Failed to update playlist. Please try again.' }
  }
}

export async function deletePlaylist(userId: string) {
  try {
    const deletedPlaylist = await db.playlist.delete({
      where: {
        id: userId
      }
    })
    return { success: true, playlist: deletedPlaylist }
  } catch (error) {
    console.error('Failed to delete playlist:', error)
    return { success: false, error: 'Failed to delete playlist. Please try again.' }
  }
}

export async function allPlaylists() {
  try {
    const result = await db.playlist.findMany()
    return result
  } catch (error) {
    console.error("Error fetching playlists", error);
    throw new Error("Failed to fetch playlists.");
  }
}