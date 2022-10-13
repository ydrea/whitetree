import { A, H1, Image, P, Row, Text, useSx, View } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
//
export function HomeScreen() {
  const sx = useSx()

  // http://localhost:1337/uploads/logo_60e391feec.png
  // https://localhost:1337/uploads/logo_5c79368669.svg

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <Image source={{ uri: 'http://localhost:1337/uploads/logo_60e391feec.png' }}
        sx={{ width: 300, height: 300 }} />

      <H1 sx={{ fontWeight: '800' }}>Welcome to White Tree.</H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>White Tree is a web portal (B2B) and a mobile app (B2C), aiming to identify and support restaurants and catering businesses that offer locally sourced, organically grown, and/or affordable menu items.
        </P>
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
          >daYDREAmnation
          </A>
          .
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

        <MotiLink
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
        </MotiLink>
      </Row>
    </View>
  )
}
