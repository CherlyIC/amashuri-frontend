import Link from 'next/link';
import { School, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <School className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl text-white">Amashuri.rw</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Rwanda's most comprehensive secondary school directory.
              Helping students and parents make informed educational
              decisions since 2025.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-blue-400" />
              <span>info@amashuri.rw</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/schools" className="hover:text-white transition-colors">
                  Schools
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  Compare Schools
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-white transition-colors">
                  Schools Map
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-white transition-colors">
                  AI Search
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">For Schools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/manage-school/register"
                  className="hover:text-white transition-colors"
                >
                  Register Your School
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-school"
                  className="hover:text-white transition-colors"
                >
                  Update Info
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-white transition-colors"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@amashuri.rw</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+250 788 000 000</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2026 Amashuri.rw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}