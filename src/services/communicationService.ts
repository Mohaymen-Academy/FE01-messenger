import { addMember, newChannel, newGroup } from '@/api/communication'

export function newGroupService(
  name: string,
  // description: string,
  photoId: number,
  profileIds: number[]
) {
  newGroup({ name, photoId, profileIds })
    .then(res => {
      console.log(3)
    })
    .catch(err => {})
}

export function newChannelService(
  name: string,
  photoId: number,
  description: string,
  profileIds: number[]
) {
  console.log(12333)
  newChannel({ name, photoId, description, profileIds })
    .then(res => {})
    .catch(err => {})
}

export function addMemberService(chatId: number, profiles: number[]) {
  console.log(12333)
  addMember({ chatId, profiles })
    .then(res => {})
    .catch(err => {})
}
