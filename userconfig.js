// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Berlin",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "wire",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "protocol",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "claude",
              url: "https://claude.ai/",
              icon: "confucius",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "daily.dev",
              url: "https://app.daily.dev",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "roadmap",
              url: "https://roadmap.sh/software-design-architecture",
              icon: "route",
              icon_color: palette.peach,
            },
            {
              name: "cs",
              url: "https://teachyourselfcs.com/",
              icon: "error-404-off",
              icon_color: palette.red,
            },
            {
              name: "drawio",
              url: "https://www.drawio.com",
              icon: "stack-push",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "mind",
      background_url: "src/img/banners/cbg-01.gif",
      categories: [
        {
          name: "Thought",
          links: [
            {
              name: "the anarchist library",
              url: "https://theanarchistlibrary.org",
              icon: "copyleft",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "discovery",
          links: [
            {
              name: "are.na",
              url: "https://www.are.na",
              icon: "topology-star-ring-3",
              icon_color: palette.green,
            },
            {
              name: "pinterest",
              url: "https://de.pinterest.com",
              icon: "brand-pinterest",
              icon_color: palette.peach,
            },
            {
              name: "archive",
              url: "https://archive.org",
              icon: "binary-tree",
              icon_color: palette.red,
            }
          ],
        },
        {
          name: "footage",
          links: [
            {
              name: "netflix",
              url: "https://www.netflix.com",
              icon: "brand-netflix",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "obscure",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: "music",
          links: [
            {
              name: "soundcloud",
              url: "https://soundcloud.com",
              icon: "brand-soundcloud",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming()",
              url: "https://musicforprogramming.net",
              icon: "apps-off",
              icon_color: palette.peach,
            },
            {
              name: "tikka",
              url: "https://tikka.live",
              icon: "math-y-minus-y",
              icon_color: palette.peach,
            },
            {
              name: "poolsuite",
              url: "https://poolsuite.net",
              icon: "circuit-inductor",
              icon_color: palette.green,
            },
            {
              name: "somafm",
              url: "https://somafm.com/",
              icon: "device-speaker",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "proton",
              url: "https://mail.proton.me",
              icon: "brackets-off",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
