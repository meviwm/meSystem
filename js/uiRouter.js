angular.module('ylmf')

//    路由
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/login/login.html'
            })
            .state('me', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'views/framework.html'
                    },
                    'header@me': {
                        templateUrl: 'views/header.html'
                    },
                    'nav@me': {
                        templateUrl: 'views/nav.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['js/nav.js']/*, {insertBefore: '#mainJs'}*/)
                            }]
                        },
                        controller: 'navCtrl'
                    }
                }
            })
            .state('me.home', {
                url: 'home',
                views: {
                    'contents@me': {
                        templateUrl: 'views/home/home.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/home/home.js']/*, {insertBefore: '#mainJs'}*/)
                            }]
                        },
                        controller: 'homeCtrl'
                    }
                }
            })
            .state('me.marketing', {
                url: 'marketing',
                views: {
                    'contents@me': {
                        templateUrl: 'views/marketing/marketing.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/marketing/marketing.js']/*, {insertBefore: '#mainJs'}*/)
                                // .load([''])
                            }]
                        },
                        controller: 'marketingCtrl'
                    }
                }
            })
            .state('me.ylmf', {
                url: 'home/ylmf',
                views: {
                    'contents@me': {
                        templateUrl: 'views/home/ylmf.html'
                    }
                }
            })
            .state('me.administrate', {
                url: 'administrate',
                views: {
                    'contents@me': {
                        templateUrl: 'views/administrate/administrate.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/administrate/admin.js']/*, {insertBefore: '#mainJs'}*/)
                            }]
                        },
                        controller: 'adminCtrl'
                    }
                }
            })
            .state('me.userData', {
                url: 'userData',
                views: {
                    'contents@me': {
                        templateUrl: 'views/userAdmin/userData.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/userAdmin/userData.js'])
                            }]
                        },
                        controller: 'userDataCtrl'
                    }
                }
            })
            .state('me.userDataDetails', {
                url: 'userData/userDataDetails',
                views: {
                    'contents@me': {
                        templateUrl: 'views/userAdmin/userDataDetails.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/userAdmin/userDataDetails.js'])
                            }]
                        },
                        controller: 'userDataDetailsCtrl'
                    }
                }
            })
            .state('me.poster', {
                url: 'poster',
                views: {
                    'contents@me': {
                        templateUrl: 'views/userAdmin/poster.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/userAdmin/poster.js'])
                            }]
                        },
                        controller: 'posterCtrl'
                    }
                }
            })
            .state('me.posterDerails', {
                url: 'poster/posterDerails',
                views: {
                    'contents@me': {
                        templateUrl: 'views/userAdmin/posterDetails.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/userAdmin/posterDetails.js'])
                            }]
                        },
                        controller: 'posterDetailsCtrl'
                    }
                }
            })
            .state('me.products', {
                url: 'products',
                views: {
                    'contents@me': {
                        templateUrl: 'views/products/products.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/products/products.js'])
                            }]
                        },
                        controller: 'productsCtrl'
                    }
                }
            })
            .state('me.addProducts', {
                url: 'products/addProducts',
                views: {
                    'contents@me': {
                        templateUrl: 'views/products/addProducts.html',
                        resolve: {
                            loadPlugInUedit: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load('uEdit');
                            }],
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/products/addProduct.js'])
                            }]
                        },
                        controller: 'addProductCtrl'
                    }
                }
            })
            .state('me.editProducts', {
                url: 'products/editProducts/:id',
                views: {
                    'contents@me': {
                        templateUrl: 'views/products/editProducts.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/products/editProduct.js'])
                            }]
                        },
                        controller: 'editProductCtrl'
                    }
                }
            })
            .state('me.addCommodity', {
                url: 'products/addCommodity',
                views: {
                    'contents@me': {
                        templateUrl: 'views/products/addCommodity.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/products/addCommodity.js'])
                            }]
                        },
                        controller: 'addCommodityCtrl'
                    }
                }
            })
            .state('me.productDetails', {
                url: 'products/productDetails',
                views: {
                    'contents@me': {
                        templateUrl: 'views/products/productDetails.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/products/productDetails.js'])
                            }]
                        },
                        controller: 'productDetailsCtrl'
                    }
                }
            })
            //商品管理
            .state('me.commodity', {
                url: 'commodity',
                views: {
                    'contents@me': {
                        templateUrl: 'views/products/commodity.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/products/commodity.js'])
                            }]
                        },
                        controller: 'commodityCtrl'
                    }
                }
            })
            .state('me.CommodityDetails', {
                url: 'commodity/CommodityDetails',
                views: {
                    'contents@me': {
                        templateUrl: 'views/products/CommodityDetails.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/products/CommodityDetails.js'])
                            }]
                        },
                        controller: 'CommodityDetailsCtrl'
                    }
                }
            })
            .state('me.editCommodityAll', {
                url: 'commodity/editCommodityAll',
                views: {
                    'contents@me': {
                        templateUrl: 'views/products/editCommodityAll.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/products/editCommodityAll.js'])
                            }]
                        },
                        controller: 'editCommodityAllCtrl'
                    }
                }
            })
            .state('me.column', {
                url: 'column',
                views: {
                    'contents@me': {
                        templateUrl: 'views/column/column.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['sortable', 'lib/jstree/themes/default/style.min.css', 'lib/jstree/jstree.min.js', 'views/column/column.js'])
                            }]
                        },
                        controller: 'columnCtrl'
                    }
                }
            })
            .state('me.addColumnContent', {
                url: 'column/addColumnContent',
                views: {
                    'contents@me': {
                        templateUrl: 'views/column/addColumnContent.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/column/addColumnContent.js'])
                            }]
                        },
                        controller: 'addColumnContentCtrl'
                    }
                }
            })
            //供应商
            .state('me.supplier', {
                url: 'supplier',
                views: {
                    'contents@me': {
                        templateUrl: 'views/supplier/supplier.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/supplier/supplier.js'])
                            }]
                        },
                        controller: 'supplierCtrl'
                    }
                }
            })
            //订单
            .state('me.orders', {
                url: 'orders',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/orders.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/sale/order.js'])
                            }]
                        },
                        controller: 'orderCtrl'
                    }
                }
            })
            .state('me.orderDetail', {
                url: 'orders/orderDetail/:id&:skuID',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/orderDetail.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/sale/orderDetail.js'])
                            }]
                        },
                        controller: 'orderDetailCtrl'
                    }
                }
            })
            .state('me.orderDetail2', {
                url: 'orders/orderDetail2/:id&:skuID',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/orderDetail-2.0.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/sale/orderDetail.js'])
                            }]
                        },
                        controller: 'orderDetailCtrl'
                    }
                }
            })
            .state('me.orderDetail3', {
                url: 'orders/orderDetail3/:id&:skuID',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/orderDetail-3.0.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/sale/orderDetail3.js'])
                            }]
                        },
                        controller: 'orderDetailCtrl3'
                    }
                }
            })
            .state('me.purchaseOrder', {
                url: 'purchaseOrder',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/purchaseOrder.html'
                    }
                }
            })
            .state('me.purchaseOrderDetails', {
                url: 'purchaseOrder/purchaseOrderDetails',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/purchaseOrderDetails.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/sale/purchaseOrderDetails.js'])
                            }]
                        },
                        controller: 'purchaseOrderDetailsCtrl'
                    }
                }
            })
            .state('me.sellOrder', {
                url: 'sellOrder',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/sellOrder.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/sale/sellOrder.js'])
                            }]
                        },
                        controller: 'sellOrderCtrl'
                    }
                }
            })
            .state('me.sellOrderDetails', {
                url: 'sellOrder/sellOrderDetails',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/sellOrderDetails.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/sale/sellOrderDetails.js'])
                            }]
                        },
                        controller: 'sellOrderDetailsCtrl'
                    }
                }
            })
            .state('me.invoice', {
                url: 'invoice',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/invoice.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/sale/invoice.js'])
                            }]
                        },
                        controller: 'invoiceCtrl'
                    }
                }
            })
            .state('me.invoiceDetails', {
                url: 'invoice/invoiceDetails',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/invoiceDetails.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/sale/invoiceDetails.js'])
                            }]
                        },
                        controller: 'invoiceDetailsCtrl'
                    }
                }
            })
            .state('me.editInvoiceInfo', {
                url: 'invoice/editInvoiceInfo',
                views: {
                    'contents@me': {
                        templateUrl: 'views/sale/editInvoiceInfo.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/sale/editInvoiceInfo.js'])
                            }]
                        },
                        controller: 'editInvoiceInfoCtrl'
                    }
                }
            })
            .state('me.authority', {
                url: 'authority',
                views: {
                    'contents@me': {
                        templateUrl: 'views/roleAuthority/authority.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/roleAuthority/authority.js'])
                            }]
                        },
                        controller: 'authorityCtrl'
                    }
                }
            })
            .state('me.role', {
                url: 'role',
                views: {
                    'contents@me': {
                        templateUrl: 'views/roleAuthority/role.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/roleAuthority/role.js'])
                            }]
                        },
                        controller: 'roleCtrl'
                    }
                }
            })
            .state('me.createRole', {
                url: 'role/createRole',
                views: {
                    'contents@me': {
                        templateUrl: 'views/roleAuthority/createRole.html',
                        /*resolve: {
                         loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                         return $ocLazyLoad
                         .load(['js/controller/role.js'])
                         }]
                         },
                         controller: 'roleCtrl'*/
                    }
                }
            })
            .state('me.systemParameter', {
                url: 'systemParameter',
                views: {
                    'contents@me': {
                        templateUrl: 'views/systemParameter/systemParameter.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['lib/jstree/themes/default/style.min.css', 'lib/jstree/jstree.min.js', 'views/systemParameter/systemParameter.js'])
                            }]
                        },
                        controller: 'systemParameterCtrl'
                    }
                }
            })
            .state('me.visualization', {
                url: 'visualization',
                views: {
                    'contents@me': {
                        templateUrl: 'views/visualization/visualization.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/visualization/visualization.js']/*, {insertBefore: '#mainJs'}*/)
                                // .load([''])
                            }]
                        },
                        controller: 'visualizationCtrl'
                    }
                }
            })
            .state('me.visualization2', {
                url: 'visualization2',
                views: {
                    'contents@me': {
                        templateUrl: 'views/visualization2/visualization.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/visualization2/visualization2.js']/*, {insertBefore: '#mainJs'}*/)
                                // .load([''])
                            }]
                        },
                        controller: 'visualizationCtrl2'
                    }
                }
            })
            .state('me.visualization3', {
                url: 'visualization3',
                views: {
                    'contents@me': {
                        templateUrl: 'views/visualization3/visualization.html',
                        resolve: {
                            loadPlugIn: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load(['views/visualization3/visualization3.js']/*, {insertBefore: '#mainJs'}*/)
                                // .load([''])
                            }]
                        },
                        controller: 'visualizationCtrl3'
                    }
                }
            });
        $urlRouterProvider.otherwise("/login")
    });