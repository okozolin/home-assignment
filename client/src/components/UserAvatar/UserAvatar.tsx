import { Avatar, AvatarProps } from "@mui/material";
import { UserData } from "../../types";
import { forwardRef } from "react";
import {generateInitials, generateRandomColor} from "../../utils/utils.ts";

type UserAvatarProps = AvatarProps & {
  user: UserData;
};

export const UserAvatar = forwardRef<HTMLDivElement, UserAvatarProps>(
  ({ user, ...props }, ref) => {
      const avatarStyle = user.avatar ? {} : {
          backgroundColor: generateRandomColor(),
          color: '#fff'
      };
    return (
        user && (
          <Avatar
              alt={user.name}
              src={user.avatar}
              ref={ref}
              {...props}
              style={avatarStyle}
          >
          {!user.avatar && generateInitials(user.name)}
        </Avatar>
    ))
  }
);
