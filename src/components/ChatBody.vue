<template>
   <!-- component -->
   <div class="flex h-screen antialiased text-gray">
      <div class="flex flex-row h-full w-full overflow-x-hidden">
        <!-- Profile -->
        <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <div class="flex flex-row items-center justify-center h-12 w-full">
            <div
              class="flex items-center justify-center rounded-2xl text-indigo-700 bg-secondary h-10 w-10"
            ><font-awesome-icon :icon="['fas', 'message']" class="text-xl text-white"/>
            </div>
            <div class="ml-2 font-bold text-2xl text-secondary">TalkTime</div>
          </div>
          <div
            class="flex flex-col items-center border border-primary mt-4 w-full py-6 px-4 rounded-lg"
          >
            <div class="h-20 w-20 rounded-full border overflow-hidden">
              <img
                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                alt="Avatar"
                class="h-full w-full"
              />
            </div>
            <div class="text-sm font-semibold mt-2 text-secondary">Hakeem</div>
            <div class="text-xs text-primary capitalize">
              Front-end develiper
            </div>
            <div class="flex flex-row items-center mt-3">
              <div
                class="flex flex-col justify-center h-4 w-8 bg-secondary rounded-full"
              >
                <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
              </div>
              <div class="leading-none ml-1 text-xs">Active</div>
            </div>
          </div>
          <div class="flex flex-col mt-8">
            <div class="text-xs">
              <span class="font-bold capitalize">Your profile account</span>
            </div>
          </div>
        </div>

        <!-- the end -->
        <div class="flex flex-col flex-auto h-full p-6">
          <div
            class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
          >
            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="flex flex-row items-center">
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-secondary flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                      >
                        <div>Hey How are you today?</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="flex flex-row items-center">
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-secondary flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                      >
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Vel ipsa commodi illum saepe numquam maxime
                          asperiores voluptate sit, minima perspiciatis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-6 col-end-13 p-3 rounded-lg">
                    <div
                      class="flex items-center justify-start flex-row-reverse"
                    >
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-secondary flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                      >
                        <div>I'm ok what about you?</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-6 col-end-13 p-3 rounded-lg">
                    <div
                      class="flex items-center justify-start flex-row-reverse"
                    >
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-secondary flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                      >
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="flex flex-row items-center">
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-secondary flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                      >
                        <div>Lorem ipsum dolor sit amet !</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-6 col-end-13 p-3 rounded-lg">
                    <div
                      class="flex items-center justify-start flex-row-reverse"
                    >
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-secondary flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                      >
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                        <div
                          class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                        >
                          Seen
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="flex flex-row items-center">
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-secondary flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                      >
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis, in.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
            >
              <div>
                <button
                  class="flex items-center justify-center text-gray-400 hover:text-gray-600"
                >
                <font-awesome-icon :icon="['fas', 'paperclip']" />
                </button>
              </div>
              <div class="flex-grow ml-4">
                <div class="relative w-full">
                  <input
                    type="text"
                    class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  <button
                    class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                  >
                  <font-awesome-icon :icon="['fas', 'link']" />
                  </button>
                </div>
              </div>
              <div class="ml-4">
                <button
                  class="flex items-center justify-center bg-secondary hover:bg-gray rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                  <span>Send</span>
                  <span class="ml-2">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

import { useProfileStore } from "../store/profile";
import { useUserStore } from "../store/user";
import { useChatStore } from "../store/chat.js";

const chats = useChatStore();
const profile = useProfileStore();
const userStore = useUserStore();
</script>

<style lang="scss" scoped>

</style>