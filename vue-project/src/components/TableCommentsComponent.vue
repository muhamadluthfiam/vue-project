<template>
  <div>
    <table class="w-full text-sm text-left text-white" >
      <thead class="text-xs bg-yellow-500">
        <tr>
          <th scope="col" class="px-6 py-3" >
            <div v-for="th in tableHeader" :key="th">
              <span>
                {{ th.name }}
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border bg-white text-black" v-for="td in tableData" :key="td">
          <td class="px-6 py-4">{{ td.id }}</td>
          <td class="px-6 py-4">{{ td.userId }}</td>
          <td class="px-6 py-4">{{ td.title }}</td>
          <td class="px-6 py-4">{{ td.body }}</td>
          <td class="px-6 py-4 text-right">
            <button class="text-base font-semibold text-white bg-yellow-500 rounded-full px-3 hover:opacity-80 hover:shadow-lg transition duration-500">Edit </button>
            <button class="text-base font-semibold text-white bg-red-700 rounded-full px-3 ml-2 hover:opacity-90 hover:shadow-lg transition duration-500" >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TableCommentsComponents',
  props: {
    columns: Array,
    entries: Array
  },
  computed: {
    tableHeader() {
      return this.columns || []
    },
    tableData() {
      return this.entries || []
    }
  }
}

</script>
