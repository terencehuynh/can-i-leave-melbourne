import React from 'react'
import { Navigation, List, Link, Icon, applyTheme, css } from 'bumbag'

type ListItemProps = {
  name: string
  icon: string
  link: string
}

const StyledList = applyTheme(List, {
  styles: {
    base: css`
      margin: 0 0 24px;
      padding: 0;
      display: flex;
      flex-direction: row;

      li {
        margin: 0 8px 0 0;

        &:last-child {
          margin-right: 0;
        }
      }
    `,
  },
})

const StyledLink = applyTheme(Link, {
  styles: {
    base: css`
      font-size: 1.5rem;
      line-height: 24px;
      height: 24px;
      width: 24px;
      display: block;
      color: #8190a2;
    `,
  },
})

const ListItem: React.FC<ListItemProps> = ({ name, icon, link }) => (
  <li>
    <StyledLink href={link} title={name}>
      <Icon icon={icon} aria-label={name} />
    </StyledLink>
  </li>
)

const FooterSocial = () => (
  <Navigation aria-label="Footer Links">
    <StyledList>
      <ListItem
        name="View on GitHub"
        icon="brand-github"
        link="https://github.com/terencehuynh/can-i-leave-melbourne"
      />
      <ListItem
        name="Twitter"
        icon="brand-twitter"
        link="https://twitter.com/terencehuynh/"
      />
      <ListItem
        name="Instagram"
        icon="brand-instagram"
        link="https://www.instagram.com/terencehuynh/"
      />
      <ListItem
        name="LinkedIn"
        icon="brand-linkedin-in"
        link="https://www.linkedin.com/in/terencehuynh/"
      />
    </StyledList>
  </Navigation>
)

export default FooterSocial
