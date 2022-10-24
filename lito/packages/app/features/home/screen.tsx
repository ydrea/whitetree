import { A, H1, P, Row, useSx, View } from 'dripsy'
import { useEffect, useState } from 'react'
import { TextLink } from 'solito/link'
//

export function LinkToSettings() {
  return <TextLink href="/settings">Settings</TextLink>
}

// export async function getServerSideProps() {
//   console.log('server side')
//   const res = await fetch('http://localhost:1337/api/restaurants')
//   const restaurants = await res.json()

//   const items = restaurants.data
//   console.log(items)
//   return { props: { items } }
// }
//
export function HomeScreen() {
  const sx = useSx()
  const [items, itemsSet] = useState<any[]>([])
  useEffect(() => {
    async function getEm() {
      const res = await fetch('http://localhost:1337/api/restaurants')
      const restaurants = await res.json()
      const items = restaurants.data
      console.log(items)
      itemsSet(items)
      return { props: { items } }
    }
    getEm()
  }, [])
  // http://localhost:1337/uploads/logo_60e391feec.png

  //
  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      {items.map((i) => (
        <TextLink href={`/restaurant/${i.id}`} key={i.id}>
          <A>
            <h2>{i.attributes.name} &rArr;</h2>
            {i.attributes.description}
          </A>
        </TextLink>
      ))}
      <LinkToSettings />
      {/* 
      <Image source={{ uri: 'http://localhost:1337/uploads/logo_60e391feec.png' }}
        sx={{ width: 300, height: 300 }} /> */}

      <H1 sx={{ fontWeight: '800' }}>Welcome to White Tree.</H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          White Tree is a web portal (B2B) and a mobile app (B2C), aiming to
          identify and support restaurants and catering businesses that offer
          locally sourced, organically grown, and/or affordable menu items.
        </P>
        {/* {JSON.stringify(items)} */}
        <P sx={{ textAlign: 'center' }}>
          White Tree is made by{' '}
          <A
            href="https://github.com/ydrea"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            sx={{ color: 'blue' }}
          >
            daYDREAmnation
          </A>
          .{' '}
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
        <View sx={{ width: 32 }} />

        {/* <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          from={{
            scale: 0,
            rotateZ: '0deg',
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink> */}
      </Row>
    </View>
  )
}
