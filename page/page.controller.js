import { createPage, listPages, pageDetails, savePageContent, updatePage } from "./page.services";

export const create = async (req, res) => {
    const pageBody = req.body;
    const page = await createPage(pageBody);
    res.json(page)
};

export const list = async (req, res) => {
    const pages = await listPages();
    res.json(pages);
};

export const update = async (req, res) => {
    const { pageId } = req.params;
    const pageBody = req.body;
    const page = await updatePage(pageId, pageBody);
    res.json(page);
};

export const changeContent = async (req, res) => {
    const { pageId } = req.params;
    const pageContent = await savePageContent(pageId, req.body);
    res.json(pageContent);
};

export const deletePageRecord = async (req, res) => {
    const { pageId } = req.params;
    const data = await deletePageRecord(pageId);
    res.json(data);
};

export const details = async (req, res) => {
    const { pageId } = req.params;
    const details = await pageDetails(pageId);
    res.json(details);
};
