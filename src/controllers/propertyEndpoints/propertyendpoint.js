import Model from '../../models/model';

const propertyModel = new Model('properties');
export const createProperty = async (req, res) => {
  const { id } = req.user.user;
  console.log(req.user);
  const {
    image,
    title,
    price,
    status,
    address,
    city,
    neighbourhood,
    LGA,
    ZIP,
    numberOfBaths,
    numberOfBeds,
    landSize,
  } = req.body;
  // const uploadImage = await uploadImageController(req.files);
  const columns =
    'agent_id, image_url, title, price, status, address, city, neighbourhood, lga, zip_code, number_of_baths, number_of_beds, land_size';
  const values = `'${id}', '${image}', '${title}', '${price}', '${status}', '${address}', '${city}', '${neighbourhood}', '${LGA}', '${ZIP}', '${numberOfBaths}', '${numberOfBeds}', '${landSize}'`;
  try {
    const data = await propertyModel.insertWithReturn(columns, values);
    res.status(201).json(data.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ messages: err.stack.messages });
  }
};
export const getAllProperties = async (req, res) => {
  try {
    const getProperties = await propertyModel.select('*');
    if (getProperties.rows === 0) {
      return res.status(404).json({ message: 'no property' });
    }
    res.status(200).json(getProperties.rows);
  } catch (err) {
    res.status(500).json({ messages: err.stack.messages });
  }
};
export const getPropertyById = async (req, res) => {
  const { id } = req.params;
  try {
    const getProperty = await propertyModel.select(
      '*',
      ` WHERE  id = '${id}' `
    );
    if (getProperty.rows === 0) {
      return res.status(404).json({ message: 'no property' });
    }
    res.status(200).json(getProperty.rows);
  } catch (err) {
    res.status(500).json({ messages: err.stack.messages });
  }
};
export const editProperty = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const agentId = req.user.user.id;
  try {
    const data = await propertyModel.update(
      req.body,
      ` WHERE "id" = ${id}  AND agent_id = ${agentId}`
    );
    return res
      .status(201)
      .send({ message: 'user property is edited successfully', success: true });
  } catch (err) {
    res.status(500).json({ messages: err.stack });
  }
  next();
};
export const deleteProperty = async (req, res) => {
  const { id } = req.params;
  const agentId = req.user.user.id;
  try {
    await propertyModel.delete(
      ` WHERE  id = '${id}' AND agent_id = ${agentId} `
    );
    res.status(200).json({ message: 'Property deleted' });
  } catch (err) {
    res.status(500).json({ messages: err.stack.messages });
  }
};

export const getAgentProperties = async (req, res) => {
  console.log(req);
  const userId = req.user.user.id;
  try {
    const getProperties = await propertyModel.select(
      '*',
      ` WHERE agent_id = ${userId} `
    );
    console.log(getProperties.rows);
    return res.status(200).json(getProperties.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ messages: err.stack });
  }
};
