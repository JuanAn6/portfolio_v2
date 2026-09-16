import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/** English version of the "Charts 3d" article. Mirrors `charts_3d_article_es.ts`. */
const charts3d: ProjectArticles = {
    tabs: {
        info: "Overview",
        technical: "Technical detail",
    },
    info: {
        title: "Charts 3d",
        meta_title: "Charts 3d — Juan Antonio",
        meta_description:
            "A charting library built out of real 3D geometry: solid bars, extruded slices and text you can walk around.",
        intro: "A library for charts made of genuine three-dimensional geometry: solid bars, extruded slices, lines as swept tubes and text you can walk around. Lit, shadowed, and rotatable with the mouse.",
        blocks: [
            { type: "title", text: "What it is", id: "what-it-is" },
            {
                type: "paragraph",
                text: "Almost every \"3D\" chart out there is a flat drawing with perspective painted on top. Not here: every bar, every slice and every letter is a body inside a scene, with its own light and shadow. Turn the camera and what was behind stays behind.",
            },
            {
                type: "paragraph",
                text: "The configuration has the shape anyone who has used Chart.js already knows — type, data, options — so moving a two-dimensional chart over to this one does not mean learning a new vocabulary.",
            },
            {
                type: "quote",
                text: "Nothing is painted in perspective: everything you see is a body inside the scene.",
                icon: icons.cube,
            },

            { type: "title", text: "Four types", id: "types" },
            {
                type: "paragraph",
                text: "Bar, line, pie and doughnut, all on one engine. Bars take three layouts: each series on its own depth row, the series side by side within each category, or stacked. The first is the one that genuinely uses the third dimension, because nothing covers anything.",
            },
            {
                type: "image",
                src: "projects/charts_3d/bar.png",
                alt: "Three-dimensional bar chart with two series",
                caption: "Bars: categories across, values up, series receding into the depth.",
                captureUrl: "C:/projects/chart3d/docs/images/bar.png",
                pending: true,
            },
            {
                type: "paragraph",
                text: "In line charts each series is a tube swept through its points, with a sphere marking each value. A gap in the data breaks the line rather than being bridged over, which is the honest thing: missing data should look missing.",
            },
            {
                type: "image",
                src: "projects/charts_3d/line.png",
                alt: "Three-dimensional line chart",
                caption: "Lines: one tube per series and one sphere per value.",
                captureUrl: "C:/projects/chart3d/docs/images/line.png",
                pending: true,
            },

            { type: "title", text: "You can touch it", id: "interaction" },
            {
                type: "paragraph",
                text: "Hovering a value raises a floating panel that always draws in front of everything else, and clicking a legend entry animates that series out and strikes it through. On entry, bars grow out of the floor and lines draw themselves.",
            },
            {
                type: "paragraph",
                text: "The scenery is a choice too: a neutral slab that only catches the shadows, or an office room with its floor, its walls, a desk and a computer. It is decoration and never reads the data.",
            },
            {
                type: "image",
                src: "projects/charts_3d/office.png",
                alt: "A chart inside the office environment",
                caption: "The \"office\" environment: the chart placed in a room.",
                captureUrl: "C:/projects/chart3d/docs/images/office.png",
                pending: true,
            },
            {
                type: "quote",
                text: "Several independent charts per page, no global state, and a teardown method that hands all the memory back.",
                icon: icons.chart,
            },

            { type: "title", text: "Limits", id: "limits" },
            {
                type: "paragraph",
                text: "It needs WebGL and there is no two-dimensional fallback. In depth layouts a tall series can hide a shorter one behind it, so order them tallest first or switch layout. Pie and doughnut draw the first series only, the same rule Chart.js follows.",
            },
        ],
    },
    technical: {
        title: "Charts 3d",
        meta_title: "Charts 3d · Technical detail — Juan Antonio",
        meta_description:
            "How Charts 3d is built: TypeScript on three.js, a Chart.js-shaped configuration, registrable chart types and a complete teardown.",
        intro: "TypeScript on three.js. A small facade on the outside — type, data, options — and on the inside a scene, a registry of chart types and a handful of pieces every type reuses.",
        blocks: [
            { type: "title", text: "The configuration", id: "configuration" },
            {
                type: "paragraph",
                text: "The shape of the configuration is deliberately Chart.js's: anyone coming from there already knows how to write it. Inside, options resolve in three layers — the library's, the chart type's and the caller's — so only what should differ has to be declared.",
            },
            {
                type: "code",
                language: "js",
                caption: "A complete chart",
                code: `const chart = new Chart3D(document.getElementById('chart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{ label: 'Sales', data: [120, 90, 160], backgroundColor: 0x3498db }],
    },
    options: {
        title: { display: true, text: 'Quarterly report' },
        scales: { y: { beginAtZero: true, title: 'EUR (k)' } },
        elements: { bar: { grouping: 'series-depth' } },
    },
});`,
            },

            { type: "title", text: "The text is geometry too", id: "text" },
            {
                type: "paragraph",
                text: "Titles, legends, axis ticks and value labels are extruded bodies, not images pasted facing the camera. That is why they catch the light the way the bars do and are hidden by whatever stands in front of them. The price is needing the glyph outlines, which come from a typeface file.",
            },
            {
                type: "paragraph",
                text: "Because that file is fetched, building a chart is asynchronous: the constructor returns immediately and the scene appears once the typeface lands. Anyone who needs to wait has a promise to hold on to.",
            },
            {
                type: "code",
                language: "js",
                caption: "Waiting for the first frame",
                code: `const chart = new Chart3D(el, config);
await chart.ready;   // font loaded, first scene built

// The typeface is served from public/ and its URL is an option, so the app
// can be mounted under a sub-path or use a different face.
options: { font: { url: '/fonts/helvetiker_regular.typeface.json' } }`,
            },
            {
                type: "quote",
                text: "Recent versions of three no longer ship example fonts, so the file lives in the repository instead of being assumed.",
                icon: icons.cube,
            },

            { type: "title", text: "The pieces", id: "pieces" },
            {
                type: "paragraph",
                text: "The facade carries only the lifecycle. Below it, the scene and its render loop are one piece; the scales, the plot box, the raycasting that says what sits under the pointer and the floating panel are others. A chart type is a class extending a base controller and registered under a name.",
            },
            {
                type: "code",
                language: "text",
                caption: "src/",
                code: `core/
  Chart3D.ts          lifecycle facade
  SceneRenderer.ts    scene, camera, lights, controls and loop
  ChartController.ts  base class every type extends
  ChartRegistry.ts    type name -> class
  Interaction.ts      raycasting, hover and click
  Tooltip3D.ts        the floating panel
  Layout.ts           the plot box
  scales/             LinearScale, CategoryScale, SeriesScale
text/                 typeface loading and caching, text meshes
components/           Axes3D, Legend3D, Title3D
environments/         registry, plain environment and office
charts/               bar/, line/, pie/`,
            },
            {
                type: "paragraph",
                text: "A new type never touches the engine: write a class that knows how to build its bodies from the data and register it under a name. The same goes for the scenery.",
            },

            { type: "title", text: "Size and teardown", id: "lifecycle" },
            {
                type: "paragraph",
                text: "The container decides: the canvas fills it and a resize observer keeps up when it changes. A container with no width or no height — easy to end up with inside a grid or a flex row — leaves the canvas at its default size, and that is the first place to look when a chart comes out tiny.",
            },
            {
                type: "paragraph",
                text: "Tearing a chart down releases every geometry, material and texture. In a charting library that is not a detail: a dashboard that creates and destroys charts as tabs change eats the card's memory in minutes if nobody hands it back.",
            },
            {
                type: "code",
                language: "bash",
                caption: "Scripts",
                code: `npm run dev         # dev server with hot reload
npm run build       # type-check, then build to dist/
npm run typecheck   # tsc --noEmit
npm run preview     # serve the production build`,
            },
            {
                type: "quote",
                text: "Every size in the options is measured in world units, not pixels: change the plot box and the sizes follow it.",
                icon: icons.chart,
            },
        ],
    },
};

export default charts3d;
