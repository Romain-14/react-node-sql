import Query from "../model/Query.js";

const getAll = async (req, res) => {
    
    const query = "SELECT * FROM category";
    const [datas] = await Query.find(query);
    
    res.status(200).json({ datas });
};

export { getAll };
