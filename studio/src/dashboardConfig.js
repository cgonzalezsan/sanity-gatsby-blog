export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b918f722fbd30ef76a294c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-i8uinpbi",
                  apiId: "e7edf69e-7e08-41d4-8cc1-9456b8af13c2",
                },
                {
                  buildHookId: "60b918f87438f6185f251b6a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yfh2u1am",
                  apiId: "75117239-c4c3-45d1-951f-a3f0adb80638",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cgonzalezsan/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yfh2u1am.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
