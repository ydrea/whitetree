import { A, Text, View } from 'dripsy'
import { TextLink } from 'solito/link'

export function Restaurant() {
  //

  return (
    <View sx={{ flex: 1 }}>
      <TextLink href="/">
        <h2>
          <A>&lArr;</A>
        </h2>
      </TextLink>
      <Text>item</Text>
    </View>
  )
}
