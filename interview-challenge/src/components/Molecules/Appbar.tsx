import { useState } from 'react'
import styled from '@emotion/styled'
import Input from '@/Atom/Input'
import Image from '@/Atom/Image'
import Link from '@/Atom/Link'
import { Layout } from 'antd';

const { Header } = Layout

const SearchInput = styled(Input)`
  height: 40px;
  width: 400px;
  border-radius: 16px;
  font-family: Thongterm;
`

const Appbar = styled(Header)`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  background-color: var(--primary600);
  height: auto;
  line-height: 0px;
`

const Spacer = styled.div`
  margin-right: 32px;
`

const StyledLink = styled(Link)`
  color: var(--white) !important;
`

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>, keyword: string): void => {
  if (e.code && e.code !== 'Enter') return
  window.location.href=`https://staging.fastwork.co/search?q=${keyword}`
  return
}

export default () => {
  const [keyword, updateKeyword] = useState("")
  return (
    <Appbar>
      <Image src="/images/logo.png" width="160px" height="30px" />
      <Spacer />
      <SearchInput
        placeholder='จ้างฟรีแลนซ์ทำ...'
        name="Searchbox"
        type="text"
        value={keyword}
        onChange={(e) => updateKeyword(e.target.value)}
        onBlur={e => console.log('blurred')}
        onKeyDown={e => handlePressKey(e, keyword)}
      />
      <LinkGroup>
        <StyledLink href="/">Fastwork ใช้ยังไง?</StyledLink>
        <Spacer />
        <StyledLink href="/">ส่วนลด</StyledLink>
      </LinkGroup>
    </Appbar>

  )
}