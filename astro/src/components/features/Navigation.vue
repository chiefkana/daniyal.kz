<template>
  <NavigationMenu aria-label="Мебельный магазин Даниял">
    <NavigationMenuList>
      <NavigationMenuItem
        v-for="component in navigation"
        :key="component.title"
        class="cursor-pointer"
      >
        <div v-if="component.children">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
            >
              <li v-for="child in component.children" :key="child.title">
                <NavigationMenuLink as-child>
                  <a
                    :href="child.href"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">
                      {{ child.title }}
                    </div>
                    <p
                      class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    >
                      {{ child.description }}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </div>
        <div v-else>
          <NavigationMenuLink as-child>
            <a
              :href="component.href"
              class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div class="text-sm font-medium leading-none">
                {{ component.title }}
              </div>
              <p
                class="line-clamp-2 text-sm leading-snug text-muted-foreground"
              >
                {{ component.description }}
              </p>
            </a>
          </NavigationMenuLink>
        </div>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type MenuLink = { title: string; href: string; description: string };
type MenuList = (Partial<MenuLink> & {
  children?: MenuLink[];
})[];

const navigation: MenuList = [
  {
    title: "Components",
    children: [
      {
        title: "Alert Dialog",
        href: "/docs/components/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/docs/components/hover-card",
        description:
          "For sighted users to preview content available behind a link.",
      },
    ],
  },
];
</script>
