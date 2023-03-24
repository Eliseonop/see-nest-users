import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";

import { EventsModule } from "./events/events.module";
import { TasksModule } from "./tasks/tasks.module";
@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, "..", "client"),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
