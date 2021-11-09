import type { Readable } from 'svelte/store'
import { readable } from "svelte/store";
import type { Message } from './type'
import { gun } from '../gun/store'

const gun_messages = gun.get("messages")

export const messages: Readable<Message[]> = readable([], set => {
	gun_messages.on(item => {
		set(item as Message[])
	})
})