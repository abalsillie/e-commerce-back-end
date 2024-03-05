const router = require('express').Router(); // require express
// require category, product, and tag route modules
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
// use category, product, and tag route modules
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
// export the router for other modules
module.exports = router;
