
import React from 'react';
import { ShoppingBag, Users, Leaf, Heart, Facebook, Mail, Phone } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const Index = () => {
  const categories = [
    {
      name: "อาหารแปรรูป",
      description: "ขนมไทย น้ำจิ้ม ขนมปัง จากชุมชน",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      count: "45+ ผลิตภัณฑ์"
    },
    {
      name: "สมุนไพร",
      description: "ยาสมุนไพร ชา น้ำมันหอมระเหย",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      count: "32+ ผลิตภัณฑ์"
    },
    {
      name: "ผ้าและสิ่งทอ",
      description: "ผ้าไทย งานหัตถกรรม เครื่องประดับ",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      count: "28+ ผลิตภัณฑ์"
    },
    {
      name: "เกษตรอินทรีย์",
      description: "ผักปลอดสาร ผลไม้สด ข้าวหอมมะลิ",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
      count: "67+ ผลิตภัณฑ์"
    }
  ];

  const featuredProducts = [
    {
      name: "น้ำผึ้งแท้ดอกลิ้นจี่",
      price: "280 บาท",
      originalPrice: "350 บาท",
      community: "บ้านห้วยโป่ง จ.เชียงใหม่",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      badge: "สินค้าฮิต"
    },
    {
      name: "ผ้าไหมมัดหมี่",
      price: "1,200 บาท",
      originalPrice: "1,500 บาท",
      community: "บ้านโนนไผ่ จ.ขอนแก่น",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop",
      badge: "งานลิมิเต็ด"
    },
    {
      name: "ข้าวหอมมะลิออร์แกนิค",
      price: "120 บาท",
      originalPrice: "150 บาท",
      community: "บ้านหนองบัว จ.ยโสธร",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop",
      badge: "ปลอดสาร"
    },
    {
      name: "ชาใบหม่อนออร์แกนิค",
      price: "150 บาท",
      originalPrice: "180 บาท",
      community: "บ้านแม่ข้าวต้ม จ.เชียงราย",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=200&fit=crop",
      badge: "สุขภาพดี"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 font-sarabun">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-600 to-yellow-500 p-3 rounded-full">
                <ShoppingBag className="text-white h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-800">OTOPHUB</h1>
                <p className="text-sm text-gray-600">ตลาดชุมชนออนไลน์</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-green-800 hover:text-green-600 transition-colors">หน้าหลัก</a>
              <a href="#categories" className="text-green-800 hover:text-green-600 transition-colors">หมวดหมู่</a>
              <a href="#products" className="text-green-800 hover:text-green-600 transition-colors">สินค้า</a>
              <a href="#contact" className="text-green-800 hover:text-green-600 transition-colors">ติดต่อ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-green-800 mb-6 leading-tight">
            เชื่อมโยง<span className="text-yellow-600">ชุมชน</span>
            <br />
            สู่<span className="text-yellow-600">ผู้บริโภค</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            แพลตฟอร์มรวบรวมสินค้า OTOP และผลิตภัณฑ์เกษตรปลอดภัยจากชุมชนทั่วไทย 
            มุ่งเน้นการเชื่อมโยงผู้ผลิตกับผู้บริโภคโดยตรง เพื่อความยั่งยืนของชุมชน
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              สั่งซื้อผ่านไลน์
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              สมัครเข้าร่วม
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-green-600 h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-green-800">150+</h3>
              <p className="text-gray-600">ชุมชนคู่ค้า</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <ShoppingBag className="text-yellow-600 h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-green-800">1,000+</h3>
              <p className="text-gray-600">ผลิตภัณฑ์</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Heart className="text-red-500 h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-green-800">5,000+</h3>
              <p className="text-gray-600">ลูกค้าพอใจ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">หมวดหมู่สินค้า</h2>
            <p className="text-xl text-gray-600">สินค้าคุณภาพจากชุมชนทั่วไทย</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">สินค้าแนะนำ</h2>
            <p className="text-xl text-gray-600">สินค้าคุณภาพจากชุมชนที่น่าสนใจ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">ผลกระทบเชิงบวกต่อชุมชน</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <Leaf className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">เกษตรยั่งยืน</h3>
              <p className="text-lg">ส่งเสริมการเกษตรที่เป็นมิตรต่อสิ่งแวดล้อม</p>
            </div>
            <div>
              <Users className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">เสริมสร้างชุมชน</h3>
              <p className="text-lg">สร้างรายได้และโอกาสให้ชุมชนท้องถิ่น</p>
            </div>
            <div>
              <Heart className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">คุณภาพชีวิต</h3>
              <p className="text-lg">ผลิตภัณฑ์ปลอดภัยดีต่อสุขภาพ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-green-600 to-yellow-500 p-3 rounded-full">
                  <ShoppingBag className="text-white h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">OTOPHUB</h3>
                  <p className="text-gray-400">ตลาดชุมชนออนไลน์</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                แพลตฟอร์มที่เชื่อมโยงชุมชนและผู้บริโภค เพื่อการพัฒนาที่ยั่งยืน
                และการสนับสนุนเศรษฐกิจชุมชนท้องถิ่นไทย
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="#" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">ช่องทางติดต่อ</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>02-123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>info@otophub.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Facebook className="h-5 w-5" />
                  <span>OTOPHUB Thailand</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">ลิงก์สำคัญ</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">เงื่อนไขการใช้งาน</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">คำถามที่พบบ่อย</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">สมัครเป็นพาร์ทเนอร์</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 OTOPHUB Thailand. สงวนลิขสิทธิ์ทุกประการ.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
