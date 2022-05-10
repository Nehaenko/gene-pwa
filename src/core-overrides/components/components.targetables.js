function componentsIntercept(targets) {
    const CreateAccount = require('./CreateAccount/createAccount.targetables');
    CreateAccount(targets);

    const MiniCart = require('./MiniCart/miniCart.targetables');
    MiniCart(targets);

    const SignIn = require('./SignIn/signIn.targetables');
    SignIn(targets);

    const ProductSort = require('./ProductSort/productSort.targetables');
    ProductSort(targets);

    const AccountMenu = require('./AccountMenu/accountMenu.targetables');
    AccountMenu(targets);

    const ForgotPassword = require('./ForgotPassword/forgotPassword.targetables');
    ForgotPassword(targets);

    const FilterModalOpenButton = require('./FilterModalOpenButton/filterModalOpenButton.targetables');
    FilterModalOpenButton(targets);

    const App = require('./App/app.targetables');
    App(targets);

    const ProductImageCarousel = require('./ProductImageCarousel/productImageCarousel.targetables.js');
    ProductImageCarousel(targets);
}

module.exports = componentsIntercept;
