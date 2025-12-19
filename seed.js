const mongoose = require("mongoose");

// Kết nối MongoDB (giữ nguyên connection string của bạn)
mongoose
	.connect(
		"mongodb+srv://20235067:20235067@cluster0.kdldadz.mongodb.net/it4409?appName=Cluster0"
	)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("MongoDB Error:", err));

// Schema giống với API server
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Tên không được để trống"],
		minlength: [2, "Tên phải có ít nhất 2 ký tự"],
	},
	age: {
		type: Number,
		required: [true, "Tuổi không được để trống"],
		min: [0, "Tuổi phải >= 0"],
	},
	email: {
		type: String,
		required: [true, "Email không được để trống"],
		match: [/^\S+@\S+\.\S+$/, "Email không hợp lệ"],
	},
	address: {
		type: String,
	},
});
const User = mongoose.model("User", UserSchema);

// Dữ liệu mẫu cần thêm
const sampleUsers = [
	{
		name: "Nguyễn Tùng Dương",
		age: 21,
		email: "duong.nt225300@sis.hust.edu.vn",
		address: "Hà Nội",
	},
	{
		name: "Hoàng Trung Hải",
		age: 21,
		email: "hai.ht225307@sis.hust.edu.vn",
		address: "Hà Nội",
	},
	{
		name: "Vũ Công Tấn",
		age: 20,
		email: "tan.vc235423@sis.hust.edu.vn",
		address: "Lào Cai",
	},
	{
		name: "Bùi Duy Ninh",
		age: 20,
		email: "ninh.bd235394@sis.hust.edu.vn",
		address: "Hải Phòng",
	},
	{
		name: "Lê Nam Hải",
		age: 22,
		email: "hai.ln215361@sis.hust.edu.vn",
		address: "Hà Nội",
	},
	{
		name: "Trần Trung Hiếu",
		age: 22,
		email: "hieu.tt210354@sis.hust.edu.vn",
		address: "Hà Nội",
	},
	{
		name: "Nguyễn Văn Thái",
		age: 24,
		email: "thai.nv194834@sis.hust.edu.vn",
		address: "Hà Nội",
	},
	{
		name: "Đoàn Ngọc Toàn",
		age: 21,
		email: "toan.dn225100@sis.hust.edu.vn",
		address: "Hà Nội",
	},
	{
		name: "Lê Văn Quang Trung",
		age: 22,
		email: "trung.lvq225104@sis.hust.edu.vn",
		address: "Nghệ An",
	},
];

async function seed() {
	try {
		const result = await User.insertMany(sampleUsers);
		console.log("Đã thêm dữ liệu mẫu:", result);
	} catch (err) {
		console.error("Lỗi:", err);
	} finally {
		mongoose.connection.close();
	}
}

seed();
