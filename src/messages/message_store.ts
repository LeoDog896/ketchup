import type { Readable } from 'svelte/store'
import { readable } from "svelte/store";
import type { Message } from './type'
import { gun } from '../gun/store'

const gun_messages = gun.get("messages")

export const add_message = (message: Message) => {
	gun_messages.set(message)
}

export const messages: Readable<Message[]> = readable([], set => {
	gun_messages.map().on(item => {
		set(item as Message[])
	})
})