import Query from "../model/Query.js";

const getAll = async (req, res) => {
    
    const query = "SELECT * FROM tea JOIN tea_packaging ON tea_packaging.tea_id = tea.id GROUP BY tea.label_1";
    const [datas] = await Query.find(query);
    
    res.status(200).json({ datas });
};

const getLastInserted = async (req, res) => {
    
    const query = "SELECT * FROM tea JOIN tea_packaging ON tea_packaging.tea_id = tea.id ORDER BY id DESC LIMIT 1";
    const [datas] = await Query.find(query);
    
    res.status(200).json({ datas });
};

const getBestSeller = async (req, res) => {   
    res.status(404).json({ status: 404, datas: "pas encore de commande" });
};

const getFavorite = async (req, res) => {
    
    const query = "SELECT * FROM tea JOIN tea_packaging ON tea_packaging.tea_id = tea.id WHERE our_favorite = ? LIMIT 1";
    const [datas] = await Query.findByValue(query, 1);
    
    res.status(200).json({ datas });
};

export { getAll, getLastInserted, getBestSeller, getFavorite };
