import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ status: "healthy", timestamp: new Date().toISOString() });
}

export default function Health() {
  return null;
} 