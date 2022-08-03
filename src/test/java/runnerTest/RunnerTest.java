package runnerTest;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

    @RunWith(Cucumber.class)

    @CucumberOptions(
            features=".//src/test/java/features/BackgroundChange.feature",
            glue= "steps",
            tags="@BackgroundChangeColour",
            monochrome=true,
            dryRun=false,
            plugin= {
                    "pretty",
                    "html:target/cucumber",
                    "json:target/cucumber.jason"
            }

    )
    class RunnerTest {

    }

