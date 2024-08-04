import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extend the default JWT type to include custom properties
interface CustomJWT extends JWT {
  id: string;
  email: string;
}

// Extend the default Session type to include custom properties
interface CustomSession extends Session {
  user: {
    id: string;
    email: string;
  };
}
