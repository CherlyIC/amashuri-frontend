'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import LanguageSwitcher from './LanguageSwitcher';
import {
  School,
  GitCompare,
  Map,
  Menu,
  X,
  User,
  Heart,
  MessageSquare,
  Settings,
  LogOut,
  LayoutDashboard,
} from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const t = useTranslations('nav');
  const compareSchools = useSelector((state: RootState) => state.compare.schools);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/schools', label: t('schools') },
    { href: '/compare', label: t('compare') },
    { href: '/map', label: t('map') },
  ];

  const getDashboardLink = () => {
    if (!session) return '/login';
    if (session.user.role === 'ADMIN') return '/admin/dashboard';
    if (session.user.role === 'SCHOOL_ADMIN') return '/manage-school';
    return '/dashboard';
  };

  return (
    <nav className="bg-blue-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center space-x-2">
            <School className="h-8 w-8 text-white" />
            <span className="font-bold text-xl">Amashuri.rw</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-200 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">

            {compareSchools.length > 0 && (
              <Link href="/compare">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white hover:bg-blue-600"
                >
                  <GitCompare className="h-4 w-4 mr-1" />
                  Compare ({compareSchools.length})
                </Button>
              </Link>
            )}

            <LanguageSwitcher />

            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 hover:bg-blue-600"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-500 text-white text-sm">
                        {session.user.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">
                      {session.user.name}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href={getDashboardLink()} className="flex items-center">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      {t('dashboard')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/favourites" className="flex items-center">
                      <Heart className="mr-2 h-4 w-4" />
                      Favourites
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/enquiries" className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Enquiries
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="text-red-600 cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {t('logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-blue-600"
                  >
                    {t('login')}
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-white text-blue-700 hover:bg-blue-50">
                    {t('register')}
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-blue-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 hover:text-blue-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {!session ? (
              <div className="flex space-x-2 pt-2">
                <Link href="/login" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full text-white border-white"
                  >
                    {t('login')}
                  </Button>
                </Link>
                <Link href="/register" className="flex-1">
                  <Button className="w-full bg-white text-blue-700">
                    {t('register')}
                  </Button>
                </Link>
              </div>
            ) : (
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="block py-2 text-red-300"
              >
                {t('logout')}
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}