import { 
  Home, 
  Atom, 
  Zap, 
  Circle, 
  Github, 
  Presentation,
  BookOpen,
  Layers,
  Brain,
  FlaskConical
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNavItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "E = mc²", url: "/energy-mass", icon: Atom },
  { title: "Light Speed Boundary", url: "/light-speed", icon: Zap },
  { title: "Space Bubble", url: "/space-bubble", icon: Circle },
];

const resourceLinks = [
  { 
    title: "Complex Relativity", 
    url: "https://github.com/tambetvali/LaegnaAIBasics/tree/main/LabDepth.ai/ComplexRelativity.ai", 
    icon: BookOpen 
  },
  { 
    title: "Exponometer Theory", 
    url: "https://prezi.com/view/3CvBfjlKweyefV3sl1Iy/?referral_token=G4RyDElnB3FN", 
    icon: Presentation 
  },
  { 
    title: "General Relativity", 
    url: "https://prezi.com/view/AkI7kSWXWyEranS9yy7U/?referral_token=G4RyDElnB3FN", 
    icon: Presentation 
  },
];

const aiProjectLinks = [
  { 
    title: "AI 1 — Intuition", 
    url: "https://github.com/tambetvali/LaegnaAIBasics", 
    icon: Brain 
  },
  { 
    title: "AI 2 — Documents", 
    url: "https://github.com/tambetvali/LaegnaPracticalAI", 
    icon: Layers 
  },
  { 
    title: "AI 3 — Fine-tuning", 
    url: "https://github.com/tambetvali/LaegnaAITraining", 
    icon: FlaskConical 
  },
  { 
    title: "AI Experiments", 
    url: "https://github.com/tambetvali/LaegnaAIExperiments", 
    icon: Github 
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="pt-4">
        {/* Logo */}
        <div className="px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-lg">⚛️</span>
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-semibold text-foreground text-sm">Complex Relativity</h1>
                <p className="text-[10px] text-muted-foreground">Exponometer Theory</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            Theory
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink 
                      to={item.url} 
                      end 
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
                      activeClassName="bg-sidebar-accent text-sidebar-primary"
                    >
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Resources */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            Resources
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourceLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-sidebar-accent"
                    >
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* AI Projects */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            AI Projects
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiProjectLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-sidebar-accent"
                    >
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
