"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideType = exports.RideStatus = exports.DriverStatus = void 0;
var DriverStatus;
(function (DriverStatus) {
    DriverStatus["ONLINE"] = "ONLINE";
    DriverStatus["OFFLINE"] = "OFFLINE";
})(DriverStatus || (exports.DriverStatus = DriverStatus = {}));
var RideStatus;
(function (RideStatus) {
    RideStatus["REQUESTED"] = "REQUESTED";
    RideStatus["ACCEPTED"] = "ACCEPTED";
    RideStatus["IN_PROGRESS"] = "IN_PROGRESS";
    RideStatus["COMPLETED"] = "COMPLETED";
    RideStatus["CANCELLED"] = "CANCELLED";
})(RideStatus || (exports.RideStatus = RideStatus = {}));
var RideType;
(function (RideType) {
    RideType["SHARED"] = "SHARED";
    RideType["SOLO"] = "SOLO";
})(RideType || (exports.RideType = RideType = {}));
//# sourceMappingURL=app.enums.js.map