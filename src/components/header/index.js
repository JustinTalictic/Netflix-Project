import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
    Group,
    Background,
    Link,
    Text,
    Container,
    Logo,
    ButtonLink,
    Feature,
    FeatureCallOut,
    PlayButton,
    Search,
    SearchIcon,
    SearchInput,
    Picture,
    Dropdown,
    Profile,
    Overlay,
    Inner,
    Close,
} from './styles/header';

export const HeaderContext = createContext();

export default function Header({ bg = true, children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <HeaderContext.Provider value={{ showPlayer, setShowPlayer }}>
            {bg ? <Background {...restProps}>{children}</Background> : children}
        </HeaderContext.Provider>
    );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.Search = function HeaderSearch({
    searchTerm,
    setSearchTerm,
    ...restProps
}) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search files and series"
                active={searchActive}
            />
        </Search>
    );
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    );
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
    children,
    ...restProps
}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Video = function HeaderVideo({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(HeaderContext);

    return showPlayer
        ? ReactDOM.createPortal(
              <Overlay>
                  <Inner>
                      <video id="netflix-player" controls autoPlay>
                          <source
                              src="/videos/Netflix-Joker.mp4"
                              type="video/mp4"
                          />
                      </video>
                      <Close onClick={() => setShowPlayer(false)}>
                          <img src="/images/icons/close-slim.png" alt="Close" />
                      </Close>
                  </Inner>
              </Overlay>,
              document.body
          )
        : null;
};

Header.PlayButton = function HeaderPlayButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(HeaderContext);

    return (
        <PlayButton onClick={() => setShowPlayer(!showPlayer)}>
            <img src="/images/icons/play-arrow.png" alt="play-arrow" />
            Play
        </PlayButton>
    );
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDRopdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};
