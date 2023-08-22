import { addMember, newChannel, newGroup } from '@/api/communication'

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
    })
    .catch(err => {})
}

export function addMemberService(chatId: number, profiles: number[]) {
  console.log(12333)
  addMember({ chatId, profiles })
    .then(res => {
    })
    .catch(err => {})
}
