var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    // Operators/ methods/ behaviors
    function Customer(nameArg, addressArg) {
        this.name = nameArg;
        this.address = addressArg;
    }
    return Customer;
}());
var Payment = /** @class */ (function () {
    function Payment() {
    }
    return Payment;
}());
var Cash = /** @class */ (function (_super) {
    __extends(Cash, _super);
    function Cash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cash;
}(Payment));
var Check = /** @class */ (function (_super) {
    __extends(Check, _super);
    function Check() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // behavior
    Check.prototype.authorised = function () { return null; };
    return Check;
}(Payment));
var Credit = /** @class */ (function (_super) {
    __extends(Credit, _super);
    function Credit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // behavior
    Credit.prototype.authorized = function () { return null; };
    return Credit;
}(Payment));
