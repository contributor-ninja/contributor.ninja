import React, {Component} from 'react';
import {markdown} from 'markdown';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import uuid from 'uuid';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const iconButtonElement = (
  <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const style = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  marginLeft: '-28px',
  marginTop: '-28px',
};

export default function Issue({loaded, issues, parentClasses}) {
  const avatar = src => loaded ? <Avatar src={src} /> : <Avatar />;

  function createOpen(issue) {
    return () => {
      // Do not allow user to open issue on blur columns
      if (parentClasses.indexOf('column-blur') !== -1) {
        return;
      }
      window.ga('send', 'event', 'issue', 'opened', issue.title);
      window.open(issue.htmlUrl);
    };
  }

  return (
    <div className="issues">
      {issues.map(issue => (
        <div key={issue._id} className="issue">
          <ListItem
            leftAvatar={avatar(issue.avatarUrl)}
            key={issue._id}
            onTouchTap={createOpen(issue)}
            primaryText={
              <div
                className={
                  !loaded ? ' text-placeholder-darker' : 'card-text'
                }
              >
                {issue.title}
              </div>
            }
            secondaryText={
              <div
                className={
                  !loaded
                    ? ' text-placeholder'
                    : 'card-text-description'
                }
              >
                {(issue.body || '').substr(0, 100)}
              </div>
            }
          />
          <Divider inset={true} />
        </div>
      ))}
    </div>
  );
}
