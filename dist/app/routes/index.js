"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/User/user.routes");
const book_route_1 = require("../modules/Book/book.route");
const member_route_1 = require("../modules/Member/member.route");
const borrow_route_1 = require("../modules/Borrow/borrow.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/user",
        route: user_routes_1.userRoutes,
    },
    {
        path: "/book",
        route: book_route_1.BookRoutes,
    },
    {
        path: "/member",
        route: member_route_1.MemberRoutes,
    },
    {
        path: "/borrow",
        route: borrow_route_1.BorrowRoutes,
    },
    // {
    //     path: '/admin',
    //     route: AdminRoutes
    // },
    // {
    //     path: '/auth',
    //     route: AuthRoutes
    // },
    // {
    //     path: '/specialties',
    //     route: SpecialtiesRoutes
    // },
    // {
    //     path: '/doctor',
    //     route: DoctorRoutes
    // },
    // {
    //     path: '/patient',
    //     route: PatientRoutes
    // },
    // {
    //     path: '/schedule',
    //     route: ScheduleRoutes
    // },
    // {
    //     path: '/doctor-schedule',
    //     route: DoctorScheduleRoutes
    // },
    // {
    //     path: '/appointment',
    //     route: AppointmentRoutes
    // },
    // {
    //     path: '/payment',
    //     route: PaymentRoutes
    // },
    // {
    //     path: '/prescription',
    //     route: PrescriptionRoutes
    // },
    // {
    //     path: '/review',
    //     route: ReviewRoutes
    // },
    // {
    //     path: '/meta',
    //     route: MetaRoutes
    // }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
//# sourceMappingURL=index.js.map