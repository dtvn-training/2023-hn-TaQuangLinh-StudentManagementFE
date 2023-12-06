<template>
  <div>
    <h1 class="text-center mb-5">Student list</h1>
    <el-table :data="students" style="width: 100%" empty>
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column label="Name" prop="name">
      </el-table-column>
      <el-table-column label="Class" prop="class">
      </el-table-column>
      <el-table-column label="Maths" prop="maths">
      </el-table-column>
      <el-table-column label="Literature" prop="literature">
      </el-table-column>
      <el-table-column label="English" prop="english">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-button type="success" size="mini" @click="exportExcel">Export</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
  
<script>
export default {
  computed: {
    students() {
      return this.$store.state.students
    }
  },
  methods: {
    handleEdit(index, row) {
      this.$router.push({ name: 'studentEdit', params: { id: index } })
    },
    handleDelete(index, row) {
      this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
        distinguishCancelAndClose: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Discard'
      })
        .then(() => {
          this.students.splice(index, 1);
          this.$message({
            type: 'success',
            message: 'Success!'
          });
          this.$router.push('/student');
        })
        .catch(action => {
          this.$message({
            type: 'info',
            message: action === 'cancel'
              ? 'Changes discarded'
              : 'Stay in the current route'
          })
        });
    },
    async exportExcel() {
      console.log("Export file");
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorkSheet("sheet1");
      const header = ['Name', 'Class', 'Maths', 'Literature', 'English'];
      sheet.addRow(header);
      this.students.forEach(student => {
        row = sheet.addRow(Object.values(student));
      });
      await workbook.xlsx.write(fileName);
    }
  },
}
</script>

<style>
  .el-table__empty-block {
    display: none !important;
  }
</style>