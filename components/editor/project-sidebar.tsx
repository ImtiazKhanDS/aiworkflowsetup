"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      data-slot="project-sidebar"
      aria-hidden={!isOpen}
      className={cn(
        "fixed top-12 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-border bg-card shadow-xl transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4">
        <h2 className="font-heading text-sm font-medium">Projects</h2>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X />
        </Button>
      </div>

      <Tabs
        defaultValue="my-projects"
        className="flex flex-1 flex-col overflow-hidden px-4 pt-3"
      >
        <TabsList className="w-full">
          <TabsTrigger value="my-projects" className="flex-1">
            My Projects
          </TabsTrigger>
          <TabsTrigger value="shared" className="flex-1">
            Shared
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="my-projects"
          className="flex flex-1 items-center justify-center text-center text-muted-foreground"
        >
          No projects yet
        </TabsContent>
        <TabsContent
          value="shared"
          className="flex flex-1 items-center justify-center text-center text-muted-foreground"
        >
          Nothing shared with you yet
        </TabsContent>
      </Tabs>

      <div className="shrink-0 border-t border-border p-4">
        <Button className="w-full">
          <Plus />
          New Project
        </Button>
      </div>
    </aside>
  )
}

export { ProjectSidebar }
