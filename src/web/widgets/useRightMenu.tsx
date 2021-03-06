import { ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import { IMenuContext } from '@siloqian/fesh-typings';
import React, { useCallback, useMemo, useState } from 'react';
import MapIcon from '@material-ui/icons/Map';
import ApartmentIcon from '@material-ui/icons/Apartment';

export interface IRightMenuProps {
  setRslPos(menuContext: IMenuContext): void;
  setXuePos(menuContext: IMenuContext): void;
}

export default function useRightMenu(props: IRightMenuProps) {
  const [menuContext, setMenuContext] = useState<IMenuContext>({
    open: false,
    position: [0, 0],
    clientX: 0,
    clientY: 0,
  });
  const openRightMenu = useCallback((map, event) => {
    const { lnglat, originEvent } = event;
    setMenuContext({
      position: lnglat,
      clientX: originEvent.clientX,
      clientY: originEvent.clientY,
      open: true,
    });
  }, []);
  const closeRightMenu = useCallback(
    () => setMenuContext((mc) => ({ ...mc, open: false })),
    [],
  );
  const { setRslPos, setXuePos } = props;

  const rightClick = (handle: (mc: IMenuContext) => void) => () => {
    handle(menuContext);
    closeRightMenu();
  };

  const rightMenu = useMemo(() => {
    const { open, clientX, clientY } = menuContext;
    return (
      <Menu
        keepMounted
        open={open}
        onClose={closeRightMenu}
        anchorReference="anchorPosition"
        anchorPosition={{ left: clientX, top: clientY }}
      >
        <MenuItem onClick={rightClick(setRslPos)}>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          认龙
        </MenuItem>
        <MenuItem onClick={rightClick(setXuePos)}>
          <ListItemIcon>
            <ApartmentIcon />
          </ListItemIcon>
          点穴
        </MenuItem>
      </Menu>
    );
  }, [menuContext]);

  return {
    rightMenu,
    closeRightMenu,
    openRightMenu,
  };
}
