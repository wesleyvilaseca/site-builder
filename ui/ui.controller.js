import { listPages } from "../page/page.services"

export const home = async (req, res) => {
    const pages = await listPages();
    res.render('home', { title: "webpage builder", pages });
}

export const editor = async (req, res) => {
    const pages = await listPages();
    const selectedPage = pages.find((page) => page.id === req.params.pageId);
    res.render('editor', { title: "webpage builder", pages, selectedPage });
}