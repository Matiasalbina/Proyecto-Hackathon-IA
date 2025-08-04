// src/app/(admin)/(ui-elements)/videos/page.tsx  (componente server)
import PageBreadcrumb from "@/components/common/PageBreadCrumb"
import VideosExample from "@/components/ui/video/VideosExample"
import ListaDoctoresClient from "@/components/user-profile/ListaDoctoresClient"

export const metadata = {
  title: "Next.js Videos | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Videos page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
}

export default function VideoPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Videos" />
      <VideosExample />
      <ListaDoctoresClient />
    </div>
  )
}
