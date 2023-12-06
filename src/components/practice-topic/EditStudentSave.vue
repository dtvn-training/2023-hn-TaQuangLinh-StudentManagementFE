<template>
    <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>
  
<script>
export default {
    methods: {
        open() {
            this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
                distinguishCancelAndClose: true,
                confirmButtonText: 'Save',
                cancelButtonText: 'Discard Changes'
            })
                .then(() => {
                    this.$message({
                        type: 'info',
                        message: 'Changes saved. Proceeding to a new route.'
                    });
                })
                .catch(action => {
                    this.$message({
                        type: 'info',
                        message: action === 'cancel'
                            ? 'Changes discarded. Proceeding to a new route.'
                            : 'Stay in the current route'
                    })
                });
        }
    }
}
</script>