const successMessage = (code, data) => {
    return { statusCode: code, message: "success", data };
  };
  
  const successMessageWithoutData = (code, message) => {
    return { statusCode: code, message: message };
  };
  const formatUser = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.password;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.location;
        delete data.dealId;
        delete data.isPushNotification;
        delete data.isVerified;
        delete data.socialId;
        delete userData.dealPurchaseId;
        delete userData.favouriteStore;
        delete userData.favouriteStores;
        delete userData.recentlyView;
      
      });
    } else {
      delete userData.__v;
      delete userData.password;
      delete userData.role;
      delete userData.document;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.jobTitle;
      delete userData.__v;
      delete userData.password;
      delete userData.location;
      delete userData.isPushNotification;
      delete userData.isVerified;
      delete userData.socialId;
      delete userData.dealPurchaseId;
      delete userData.favouriteStore;
      delete userData.favouriteStores;
      delete userData.recentlyView;
      if(!userData.profilePic)
      {
      delete userData.profilePic
      }
    }
    return userData;
  };
  
  const formatFavourites = (userData) => {
    delete userData.__v;
    delete userData.name;
    delete userData.email;
    delete userData._id;
    delete userData.password;
    delete userData.role;
    delete userData.document;
    delete userData.isBlocked;
    delete userData.isDeleted;
    delete userData.createdAt;
    delete userData.updatedAt;
    delete userData.jobTitle;
    delete userData.__v;
    delete userData.location;
    delete userData.isPushNotification;
    delete userData.isVerified;
    delete userData.phoneNumber;
    delete userData.dealPurchaseId;
    if (userData.favouriteStores.length) {
      userData.favouriteStores.forEach((data) => {
        delete data.__v;
        delete data.password;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.location;
        delete data.dealId;
        delete data.deals;
        delete data.phoneNumber;
        delete data.isPushNotification;
        delete data.isVerified;
        delete data.socialId;
      });
    } else {
      delete userData.__v;
      delete userData.password;
      delete userData.role;
      delete userData.document;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.jobTitle;
      delete userData.__v;
      delete userData.password;
      delete userData.location;
      delete userData.phoneNumber;
      delete userData.isPushNotification;
      delete userData.isVerified;
      delete userData.socialId;
    }
    return userData;
  };
  const formatRecentlyView = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.deals;
        delete data.location;
      });
    } else {
      delete userData.__v;
      delete userData.password;
      delete userData.role;
      delete userData.document;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.jobTitle;
      delete userData.__v;
      delete userData.password;
      delete userData.location;
      delete userData.phoneNumber;
      delete userData.isPushNotification;
      delete userData.isVerified;
      delete userData.socialId;
    }
    return userData;
  };
  
  const formatResturant = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData._id;
      delete userData.vendorId;
    }
    return userData;
  };
  
  const formatVendor = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData.vendorId;
      delete userData.password;
      delete userData.loc;
    }
    return userData;
  };
  
  const vendorformat = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData.vendorId;
      delete userData.password;
      delete userData.loc;
      delete userData.menuItem;
      delete userData.subCategory
    }
    return userData;
  };
  
  const formatOutletVendor = (userData) => {
    if (userData.vendor.length) {
      userData.vendor.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
        delete data.items;
        delete data.menuItem;
        delete data.outletTYpe;
        delete data.subCategory;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData.vendorId;
      delete userData.password;
      delete userData.loc;
      delete userData.menuItem;
      delete userData.subCategory
    }
    return userData;
  };
  
  const formatCategory = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.password;
        if (data.outlet) {
          data.outlet.map((data) => {
            delete data.__v;
            delete data.isBlocked;
            delete data.isDeleted;
            delete data.createdAt;
            delete data.updatedAt;
            delete data.password;
            delete data.menuItemId;
            delete data.location;
            delete data.outletLatitude;
            delete data.outletName;
            delete data.categoryName;
            delete data.subCategory;
          });
        }
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData._id;
      delete userData.vendorId;
    }
    return userData;
  };
  
  const formatSubCategory = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
        delete data.dealId;
        delete data.deals;
        delete data.vendorId;
        delete data.menuItem;
        delete data.vendor;
        delete data.categoryId;
        delete data.item;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData.vendorId;
      delete userData.password;
      delete userData.vendor;
    }
    return userData;
  };
  
  const formatUserReview = (userData) => {
    if (userData) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
        delete data.dealId;
        delete data.deals;
        delete data.vendorId;
        delete data.menuItem;
        delete data.categoryId;
        delete data.item;
        // delete data.vendor.menuItem;
        // delete data.vendor.__v;
        // delete data.vendor.isBlocked;
        // delete data.vendor.isDeleted;
        // delete data.vendor.createdAt;
        // delete data.vendor.updatedAt;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData._id;
      delete userData.vendorId;
      delete userData.password;
    }
    return userData;
  };
  
  const formatItemSubItem=(userData)=>{
  
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
        delete data.dealId;
        delete data.deals;
        delete data.vendorId;
        delete data.menuItem;
        delete data.categoryId;
        delete data.subCategory;
    
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData.vendorId;
      delete userData.password;
      delete userData.loc;
      delete userData.outletLongitude;
      delete userData.outletType;
      delete userData.menuItem;
      delete userData.categoryId;
      delete userData.subCategory;
      delete userData.outletWebsite;
      delete userData.vendor
    }
    return userData
  }
  
  const formatItemVendor = (userData) => {
  
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
        delete data.dealId;
        delete data.deals;
        delete data.vendorId;
        delete data.menuItem;
        delete data.categoryId;
        delete data.subItem;
        delete data.subCategory;
        delete data.itemImageURL;
        //  data.vendor.map((data)=>{
        //   delete data.items
        //  })
  
        // delete data.vendor.menuItem;
        // delete data.vendor.__v;
        // delete data.vendor.isBlocked;
        // delete data.vendor.isDeleted;
        // delete data.vendor.createdAt;
        // delete data.vendor.updatedAt;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData._id;
      delete userData.vendorId;
      delete userData.password;
      delete userData.loc;
      delete userData.outletLongitude;
      delete userData.outletType;
      delete userData.outletWebsite;
    }
    return userData;
  };
  
  const formatReview = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.customerId;
        delete data.password;
        delete data.dealId;
        delete data.deals;
        delete data.vendorId;
        delete data.menuItem;
        delete data.vendor;
        delete data.categoryId;
        delete data.item;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.__v;
      delete userData._id;
      delete userData.vendorId;
      delete userData.password;
    }
    return userData;
  };
  
  const formatSubCategoryVendor = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
        delete data.dealId;
        delete data.deals;
        delete data.vendorId;
        delete data.categoryId;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData.item;
      if (userData.vendor.length) {
        userData.vendor.map((data) => {
          delete data.__v;
          delete data.isBlocked;
          delete data.isDeleted;
          delete data.createdAt;
          delete data.updatedAt;
          delete data.customerId;
          delete data.password;
          delete data.dealId;
          delete data.deals;
          delete data.vendorId;
          delete data.categoryId;
          // if(data.vendor.menuItem.length)
          // {
          //   data.vendor.menuItem.map((data) => {
          //     delete data.__v;
          // delete data.isBlocked;
          // delete data.isDeleted;
          // delete data.createdAt;
          // delete data.updatedAt;
          // delete data.customerId;
          // delete data.password;
          // delete data.menuItemBeerGarden;
          // delete data.menuItemChildFriendly;
          // delete data.menuItemDogFriendly;
          // delete data.menuItemGlutenFree;
          // delete data.menuItemHalal;
          // delete data.menuItemHappyHours;
          // delete data.menuItemLiveEntertainment;
          // delete data.menuItemPrice;
          // delete data.resturantId;
          // delete data.subitemRoofTopBar;
          //   })
          // }
        });
      }
      delete userData.vendorId;
      delete userData.password;
    }
    return userData;
  };
  
  const formatItem = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
        delete data.dealId;
        delete data.deals;
        delete data.vendorId;
        delete data.categoryId;
        delete data.menuItemId;
        delete data.subItemId;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      if (userData.menuItem.length) {
        userData.menuItem.forEach((data) => {
          delete data.__v;
          delete data.isBlocked;
          delete data.isDeleted;
          delete data.createdAt;
          delete data.updatedAt;
          delete data.customerId;
          delete data.password;
          delete data.menuItemBeerGarden;
          delete data.menuItemChildFriendly;
          delete data.menuItemDogFriendly;
          delete data.menuItemGlutenFree;
          delete data.menuItemHalal;
          delete data.menuItemHappyHours;
          delete data.menuItemLiveEntertainment;
          delete data.menuItemPrice;
          delete data.subitemRoofTopBar;
        });
      }
    }
    return userData;
  };
  
  const formatItemSubDetails = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
        delete data.dealId;
        delete data.deals;
        delete data.vendorId;
        delete data.categoryId;
        delete data.menuItemId;
        delete data.subItemId;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData.vendorId;
      delete userData.password;
      delete userData.menuItem;
      if (userData.subItem) {
        userData.subItem.forEach((data) => {
          delete data.__v;
          delete data.isBlocked;
          delete data.isDeleted;
          delete data.createdAt;
          delete data.updatedAt;
          delete data.customerId;
        });
      }
    }
    return userData;
  };
  
  const formatItemMenuDetails = (userData) => {
    if (userData.length) {
      userData.forEach((data) => {
        delete data.__v;
        delete data.isBlocked;
        delete data.isDeleted;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.customerId;
        delete data.password;
        delete data.dealId;
        delete data.deals;
        delete data.vendorId;
        delete data.categoryId;
        delete data.menuItemId;
        delete data.subItemId;
      });
    } else {
      delete userData.__v;
      delete userData.isBlocked;
      delete userData.isDeleted;
      delete userData.createdAt;
      delete userData.updatedAt;
      delete userData.__v;
      delete userData._id;
      delete userData.vendorId;
      delete userData.password;
      delete userData.subItem;
      if (userData.menuItem) {
        userData.menuItem.forEach((data) => {
          delete data.__v;
          delete data.isBlocked;
          delete data.isDeleted;
          delete data.createdAt;
          delete data.updatedAt;
          delete data.customerId;
          delete data.resturantId.menuItem;
          if(data.resturantId){
             data.resturantId.forEach((data)=>{
            delete data.menuItem;
            delete data.subCategory;
          })
        }
          // delete data.menuItemBeerGarden;
          // delete data.menuItemChildFriendly;
          // delete data.menuItemDescription;
          // delete data.menuItemDogFriendly;
          // delete data.menuItemGlutenFree;
          // delete data.menuItemHalal;
          // delete data.menuItemHappyHours;
          // delete data.menuItemLiveEntertainment;
          // delete data.menuItemPrice;
          delete data.subitemRoofTopBar;
        });
      }
    }
    return userData;
  };
  const formatMenuItem = (data) => {
    if (data) {
      delete data.__v;
      delete data.isBlocked;
      delete data.isDeleted;
      delete data.createdAt;
      delete data.updatedAt;
      delete data.customerId;
      delete data.password;
      delete data.dealId;
      delete data.deals;
      delete data.vendorId;
      delete data.categoryId;
      delete data.menuItemId;
      delete data.subItemId;
      delete data.isBlocked;
      delete data.isDeleted;
      delete data.createdAt;
      delete data.updatedAt;
      delete data.customerId;
      //   data.forEach((data) => {
      //     delete data.__v;
      //     delete data.isBlocked;
      //     delete data.isDeleted;
      //     delete data.createdAt;
      //     delete data.updatedAt;
      //     delete data.customerId;
      //     delete data.menuItemBeerGarden;
      //     delete data.menuItemChildFriendly;
      //     delete data.menuItemDogFriendly;
      //     delete data.menuItemGlutenFree;
      //     delete data.menuItemHalal;
      //     delete data.menuItemHappyHours;
      //     delete data.menuItemLiveEntertainment;
      //     delete data.menuItemPrice;
      //     delete data.resturantId;
      //     delete data.subitemRoofTopBar;
      // });
      if (data.menuItem) {
        data.menuItem.forEach((data) => {
          delete data.__v;
          delete data.isBlocked;
          delete data.isDeleted;
          delete data.createdAt;
          delete data.updatedAt;
          delete data.customerId;
        });
      }
    } else {
      delete data.__v;
      delete data.isBlocked;
      delete data.isDeleted;
      delete data.createdAt;
      delete data.updatedAt;
      delete data.customerId;
      delete data.password;
      delete data.dealId;
      delete data.deals;
      delete data.vendorId;
      delete data.categoryId;
      delete data.menuItemId;
      delete data.subItemId;
      if (data.menuItem) {
        data.menuItem.forEach((data) => {
          delete data.__v;
          delete data.isBlocked;
          delete data.isDeleted;
          delete data.createdAt;
          delete data.updatedAt;
          delete data.customerId;
        });
      }
    }
    return data;
  };
  module.exports = {
    formatItemVendor,
    formatSubCategoryVendor,
    formatItemSubDetails,
    successMessageWithoutData,
    successMessage,
    formatResturant,
    formatVendor,
    formatUser,
    formatFavourites,
    formatCategory,
    formatUserReview,
    formatSubCategory,
    formatRecentlyView,
    formatItem,
    formatItemMenuDetails,
    formatMenuItem,
    formatReview,
    vendorformat,
    formatItemSubItem,
    formatOutletVendor 
  };
  