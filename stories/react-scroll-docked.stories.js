// @flow @format

import React from 'react';

import { storiesOf } from '@storybook/react';

// TODO: move to dist
import docked from '../src';

const DockedThing = docked(() => (
  <div style={{ background: 'teal', color: 'white' }}>Hello, I am docked!</div>
));
const PageContent = () => (
  <div>
    <DockedThing />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum
      a urna ut volutpat. Aliquam nisl felis, porttitor in ultricies eu,
      scelerisque et odio. Mauris nibh tortor, pretium vel tempus et, hendrerit
      vel felis. Sed sed nibh vitae odio finibus interdum. Praesent rhoncus ante
      augue, eu pulvinar felis faucibus id. Praesent dignissim lorem eu nisl
      aliquam mollis. Fusce fringilla vehicula nulla, ullamcorper porttitor quam
      imperdiet ut. Sed ac metus suscipit, rutrum dui eget, posuere odio.
      Phasellus metus ante, lobortis eget placerat sed, vestibulum at mi. Nullam
      vel rutrum urna, sed tincidunt dolor. Aenean elit mi, eleifend vitae
      tristique in, blandit sit amet eros. Etiam dignissim lacus sit amet ipsum
      faucibus, non iaculis lectus blandit.
    </p>
    <p>
      Quisque et dolor efficitur, laoreet odio sit amet, vehicula lorem. Sed
      suscipit ipsum ac urna hendrerit tincidunt. Orci varius natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Ut quis pharetra
      quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia Curae; Integer nec vulputate eros. Integer sit amet tortor
      at sapien maximus imperdiet. Donec rutrum volutpat neque, sit amet egestas
      justo tempus in. Nulla ac dignissim diam, at pulvinar mi. Duis eget velit
      nulla. Donec odio leo, cursus quis nisi faucibus, condimentum cursus
      felis. Curabitur aliquam nisi ligula, vel cursus odio posuere sit amet.
      Praesent vitae tempus velit. Etiam convallis arcu maximus lectus
      efficitur, nec gravida sapien fringilla. Praesent lorem odio, luctus at
      faucibus at, aliquet quis sem.
    </p>
    <p>
      In vel augue eget ante tincidunt aliquet. Suspendisse at convallis nibh.
      Donec et luctus erat. Nulla lobortis, leo ac fringilla condimentum, ex
      lorem placerat tellus, nec fermentum ligula arcu in libero. Phasellus
      vitae mauris eget lacus dapibus consequat. Duis dignissim lectus aliquam
      nibh placerat, eu imperdiet metus dignissim. Pellentesque rhoncus congue
      dui. Cras semper, orci et iaculis dapibus, justo est congue diam, ut
      laoreet sem ligula vitae eros. Pellentesque tellus augue, rutrum sit amet
      porta ac, suscipit eu nunc. Suspendisse at ante vitae arcu laoreet
      fringilla sit amet vitae eros. Phasellus vel dignissim nisl, eget pharetra
      quam. Praesent imperdiet luctus eros. Interdum et malesuada fames ac ante
      ipsum primis in faucibus.
    </p>
    <p>
      Aliquam blandit, nulla a volutpat vehicula, dui sapien posuere ante, vel
      auctor eros est a ex. Sed lorem neque, viverra a nibh vel, facilisis
      pretium dolor. Sed fermentum, arcu vel condimentum posuere, tellus est
      posuere enim, id aliquam dui nisl a risus. Praesent imperdiet tortor quis
      vehicula semper. Etiam in fringilla risus. Maecenas ac porta dui, et
      imperdiet tellus. Donec vestibulum odio vitae lorem ultricies venenatis eu
      feugiat lectus. Morbi aliquam id urna sed dignissim. Nullam quis ultrices
      diam, a imperdiet tortor. Suspendisse euismod risus turpis, at luctus ante
      ullamcorper at. Vestibulum elit risus, consequat vel turpis vitae, finibus
      tincidunt nisl.
    </p>
    <p>
      Fusce rhoncus ligula quis molestie tempor. Morbi mollis, enim a suscipit
      volutpat, nisl velit lobortis purus, iaculis pretium nibh odio non neque.
      Pellentesque porta ligula et dolor gravida, vitae feugiat nunc ultricies.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Donec imperdiet commodo massa, quis accumsan quam
      efficitur quis. Nam rutrum dolor porta, elementum massa eget, ullamcorper
      risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Phasellus porttitor a massa a hendrerit. Morbi in diam mollis massa
      dapibus sollicitudin condimentum at lacus. Suspendisse pellentesque
      faucibus turpis, non fringilla dolor. Aliquam vel varius lectus, nec
      pellentesque nibh. Morbi elementum sodales mauris, non vulputate purus
      malesuada consectetur. Nam tempus in orci vitae vestibulum.
    </p>
  </div>
);

storiesOf('docked header', module).add('hello', () => <PageContent />);
