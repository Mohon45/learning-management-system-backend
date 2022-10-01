const Teacher = require("../models/Users");

exports.getTeachersService = async (filters, queries) => {
  const teachers = await Teacher.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  // const total = await Teacher.countDocuments(filters);
  // const page = Math.ceil(totalProducts / queries.limit);
  return teachers;
};

// exports.createProductService = async (data) => {
//   const product = await Product.create(data);
//   return product;
// };

// exports.updateProductByIdService = async (productId, data) => {
//   const result = await Product.updateOne(
//     { _id: productId },
//     { $inc: data },
//     {
//       runValidators: true,
//     }
//   );

//   // const product = await Product.findById(productId);
//   // const result = await product.set(data).save();
//   return result;
// };

// exports.bulkUpdateProductService = async (data) => {
//   // console.log(data.ids,data.data)
//   // const result = await Product.updateMany({ _id: data.ids }, data.data, {
//   //     runValidators: true
//   // });

//   const products = [];

//   data.ids.forEach((product) => {
//     products.push(Product.updateOne({ _id: product.id }, product.data));
//   });

//   const result = await Promise.all(products);
//   console.log(result);

//   return result;
// };

// exports.deleteProductByIdService = async (id) => {
//   const result = await Product.deleteOne({ _id: id });
//   return result;
// };

// exports.bulkDeleteProductService = async (ids) => {
//   const result = await Product.deleteMany({});

//   return result;
// };
