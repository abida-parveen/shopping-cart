export const AddItem = (cartItems, cartItemsToAdd) => {
  // checking if item already exist in the cart or not
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  // if it exist we have to increament its quantity by 1
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if it doesnot exist we have to add item with an addition property of quantity and its initial value will be 1
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

// we have to remove item depending on the quantity
export const RemoveItem = (cartItems, cartItemsToRemove) => {
  // finding the item that is to be deleted
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToRemove.id
  );

  // if quanity is 1 then we have to remove item
  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
  }

  // else we have to minus its quantity by 1
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemsToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// clearing items don't have any concern to quantity we have to remove the whole item
export const ClearItem = (cartItems, cartItemsToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemsToClear.id);
};
