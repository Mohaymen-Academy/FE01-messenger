import { newChannel, newGroup } from '@/api/newChat'

export function newGroupService(
  name: string,
  // description: string,
  photo: null,
  profileIds: number[]
) {
  console.log(2)
  newGroup({ name, photo, profileIds })
    .then(res => {
      console.log(3)
    })
    .catch(err => {})
}

export function newChannelService(
  name: string,
  photo: null,
  description: string,
  profileIds: number[]
) {
  console.log(12333)
  newChannel({ name, photo, description, profileIds })
    .then(res => {
      console.log(321)
    })
    .catch(err => {})
}
