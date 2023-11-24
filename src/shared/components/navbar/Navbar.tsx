import classNames from 'classnames';
import React from 'react';
import { LuChevronLeft } from 'react-icons/lu';

export default function Navbar({
  showSubNavbar = false,
  navbarClassName,
  guestLinks,
  logoImgSrc,
  logoLink,
  logoImgAlt,
  controlLinks,
}: IProps) {
  return (
    <>
      {showSubNavbar && (
        <div className="bg-black text-[11px] text-zinc-400 py-1 px-32 flex items-center hover:text-zinc-300">
          <LuChevronLeft className="text-base" /> Back to
          <a href="/" className="font-semibold ml-1">
            packlify.com
          </a>
        </div>
      )}
      <div className={classNames('flex py-4 px-32 justify-between relative items-center', navbarClassName)}>
        <div className="flex items-center flex-wrap">
          <a href={logoLink}>
            <img src={logoImgSrc} alt={logoImgAlt} className="h-9 mr-12" />
          </a>
          <div>{guestLinks}</div>
        </div>
        <div className="flex items-center">{controlLinks}</div>
      </div>
    </>
  );
}

interface IProps extends IComponent {
  navbarClassName?: string;
  guestLinks?: React.ReactNode;
  controlLinks: React.ReactNode;
  logoImgSrc: string;
  logoLink: string;
  logoImgAlt: string;
  showSubNavbar?: boolean;
}
