import React from "react";
import classNames from "classnames";
import type { HTMLAttributes } from "react";
import { createElement } from "react";
import dropdown from "@/svgs/icons/dropdown.svg";
import dropup from "@/svgs/icons/dropup.svg";
import menu from "@/svgs/icons/menu.svg";
import list from "@/svgs/icons/list.svg";
import bookmark from "@/svgs/icons/bookmark.svg";
import share from "@/svgs/icons/share.svg";
import info from "@/svgs/icons/info.svg";
import emotion from "@/svgs/icons/emotion.svg";
import tune from "@/svgs/icons/tune.svg";
import bell from "@/svgs/icons/bell.svg";
import home from "@/svgs/icons/home.svg";
import explore from "@/svgs/icons/explore.svg";
import add from "@/svgs/icons/add.svg";
import folder from "@/svgs/icons/folder.svg";
import prev from "@/svgs/icons/prev.svg";
import play from "@/svgs/icons/play.svg";
import pause from "@/svgs/icons/pause.svg";
import next from "@/svgs/icons/next.svg";
import close from "@/svgs/icons/close.svg";
import sphere from "@/svgs/icons/sphere.svg";
import playlist from "@/svgs/icons/playlist.svg";
import icon from "@/svgs/icons/icon.svg";
import align from "@/svgs/icons/align.svg";
import search from "@/svgs/icons/search.svg";
import left from "@/svgs/icons/left.svg";
import right from "@/svgs/icons/right.svg";
import edit from "@/svgs/icons/edit.svg";
import person from "@/svgs/icons/person.svg";
import deleteCircle from "@/svgs/icons/deleteCircle.svg";
import music from "@/svgs/icons/music.svg";
import arrowLeft from "@/svgs/icons/arrowLeft.svg";
import arrowRight from "@/svgs/icons/arrowRight.svg";
import style from "@/svgs/icons/style.svg";
import situation from "@/svgs/icons/situation.svg";
import text from "@/svgs/icons/text.svg";
import favorite from "@/svgs/icons/favorite.svg";
import cd from "@/svgs/icons/cd.svg";
import profile from "@/svgs/icons/profile.svg";
import date from "@/svgs/icons/date.svg";
import camera from "@/svgs/icons/camera.svg";
import image from "@/svgs/icons/image.svg";
import cdCase from "@/svgs/icons/cdCase.svg";
import copy from "@/svgs/icons/copy.svg";
import history from "@/svgs/icons/history.svg";
import collection from "@/svgs/icons/collection.svg";
import bookmarkFill from "@/svgs/icons/bookmarkFill.svg";
import generate from "@/svgs/icons/generate.svg";
import headset from "@/svgs/icons/headset.svg";
import stats from "@/svgs/icons/stats.svg";
import record from "@/svgs/icons/record.svg";
import folding from "@/svgs/icons/folding.svg";
import check from "@/svgs/icons/check.svg";
import location from "@/svgs/icons/location.svg";
import pin from "@/svgs/icons/pin.svg";
import link from "@/svgs/icons/link.svg";
import snap from "@/svgs/icons/snap.svg";
import more from "@/svgs/icons/more.svg";
import sad from "@/svgs/icons/sad.svg";
import mad from "@/svgs/icons/mad.svg";
import good from "@/svgs/icons/good.svg";
import joy from "@/svgs/icons/joy.svg";
import neutral from "@/svgs/icons/neutral.svg";
import piano from "@/svgs/icons/piano.svg";
import mic from "@/svgs/icons/mic.svg";
import guitar from "@/svgs/icons/guitar.svg";
import trumpet from "@/svgs/icons/trumpet.svg";
import drum from "@/svgs/icons/drum.svg";
import elecguitar from "@/svgs/icons/elecguitar.svg";
import resting from "@/svgs/icons/rest.svg";
import commute from "@/svgs/icons/commute.svg";
import eating from "@/svgs/icons/eating.svg";
import working from "@/svgs/icons/working.svg";
import workout from "@/svgs/icons/workout.svg";
import studying from "@/svgs/icons/book.svg";
import creative_work from "@/svgs/icons/creative.svg";
import routine from "@/svgs/icons/day.svg";
import hanging_out from "@/svgs/icons/hangout.svg";
import traveling from "@/svgs/icons/trip.svg";
import hobbies from "@/svgs/icons/hobby.svg";
import celebrating from "@/svgs/icons/congrats.svg";

export const icons: {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} = {
  menu,
  list,
  bell,
  prev,
  play,
  pause,
  next,
  icon,
  dropdown,
  dropup,
  left,
  right,
  arrowLeft,
  arrowRight,
  deleteCircle,
  add,
  music,
  text,
  favorite,
  cd,
  bookmark,
  bookmarkFill,
  person,
  profile,
  situation,
  search,
  edit,
  tune,
  playlist,
  info,
  emotion,
  style,
  share,
  sphere,
  date,
  camera,
  image,
  cdCase,
  copy,
  align,
  history,
  collection,
  close,
  generate,
  headset,
  stats,
  record,
  folding,
  check,
  location,
  pin,
  link,
  snap,
  more,
  sad,
  mad,
  good,
  joy,
  neutral,
  piano,
  mic,
  guitar,
  trumpet,
  drum,
  elecguitar,
  resting,
  commute,
  eating,
  working,
  workout,
  studying,
  creative_work,
  routine,
  hanging_out,
  traveling,
  hobbies,
  celebrating,
};

interface IconProps {
  icon: string;
  color?: string;
  size?: number;
  className?: string;
  motion?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Icon = ({
  icon,
  color,
  size = 24,
  className,
  onClick,
  motion = true,
  ...rest
}: IconProps) => {
  const baseIconClasses = " flex items-center justify-center cursor-pointer ";

  if (!icons[icon]) return null;

  return (
    <div
      aria-label={icon}
      className={classNames(
        baseIconClasses,
        motion
          ? "transition-all duration-200 ease-in-out focus:opacity-50 active:opacity-50 active:scale-90"
          : ""
      )}
      onClick={onClick}
      {...rest}
    >
      {createElement(icons[icon], {
        style: {
          width: size.toString(),
        },
        className: className,
      })}
    </div>
  );

  // return (
  //   <div className={classNames(baseIconClasses)} onClick={onClick} {...rest}>
  //     <IconContext.Provider
  //       value={{
  //         color,
  //         size: size.toString(),
  //         className: className,
  //       }}
  //     >
  //       <IconComponent />
  //     </IconContext.Provider>
  //   </div>
  // )
};
