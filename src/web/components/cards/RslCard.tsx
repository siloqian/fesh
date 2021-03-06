import React from 'react';
import BaseCard from './BaseCard';

import MapIcon from '@material-ui/icons/Map';
import useLnglat from '../../widgets/universal/useLnglat';
import { IWithSolutionPack } from '@siloqian/fesh-typings';
import RslDirectionBoard from '../boards/RslDirectionBoard';
import byStatus from '../../widgets/universal/byStatus';

export interface IRslCard extends IWithSolutionPack {}

export default function RslCard(props: IRslCard) {
  const { rslPos } = props.archive.positions;
  const lnglat = useLnglat(rslPos?.lnglat);

  return (
    <BaseCard avatar={<MapIcon />} title="入首龙" subheader={lnglat}>
      {byStatus()}
    </BaseCard>
  );
}
