import React, {Component} from 'react';
import Issue from './Issue';
import SwipeableViews from 'react-swipeable-views';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import uuid from 'uuid';
import {Manager, Target, Popper, Arrow} from 'react-popper';

const iconButtonElement = (
  <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const style = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  marginLeft: '-28px',
  marginTop: '-28px',
};

const PopperExample = () =>
  <Manager>
    <Target style={style}>
      <FloatingActionButton
        backgroundColor={'#512da8'}
        disabled={true}
        onMouseDown={() => console.log('add line')}>
        <ContentAdd />
      </FloatingActionButton>
    </Target>
    <Popper placement="bottom" className="popper">
      Add a new column
      <Arrow className="popper__arrow" />
    </Popper>
  </Manager>;

export default function({loaded, columns, isConnected, isMobile}) {
  const MobileSwipeableViews = isMobile ? SwipeableViews : 'div'

  return (
    <MobileSwipeableViews>
      {columns.map((column, index) =>
        <Card
          key={column.id}
          style={{marginLeft: 14, marginTop: 14}}
          className={classNames('column', {['column-blur']: (!isConnected && index > 1)})}>

          <div>
            <span>
              <List>
                <Subheader
                  style={{
                    color: 'white',
                    backgroundColor: '#512da8',
                  }}>
                  {column.language.name}
                </Subheader>
                <div>
                  <Issue issues={column.issues} loaded={loaded} parentClasses={classNames('column', {['column-blur']: (!isConnected && index > 1)})} />
                </div>
              </List>
            </span>
          </div>
        </Card>
      )}

      <Card
        style={{marginLeft: 14, marginTop: 14}}
        className="column column-add column-blur">
        <div className="issues" style={{position: 'relative'}}>
          {PopperExample()}
        </div>
      </Card>
    </MobileSwipeableViews>
  );
}
