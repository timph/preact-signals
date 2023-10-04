// import { memo } from 'preact/compat'
import { double } from './state'

export default function ShowDoubleCount() {
  return <p>Double count {double}</p>
}
// No need
// export default memo(ShowDoubleCount)